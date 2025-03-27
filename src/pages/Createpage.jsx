import { useEffect, useState } from "react"
import "../styles/create.css"
import axios from "axios"

export default function Createpage() {

    const dealers = {
        1 : "Legendary Cruisers Самара",
        2 : "Legendary Cruisers Новосибирск",
        3: "Legendary Cruisers Красноярск",
        4: "Legendary Cruisers Казань"
    }

    const brands = {
        1: "Harley-Davidson",
        2: "Indian"
    }

    const models = {
        1: ["CVO", "Pan America", "Softail", "Sportster", "Street", "Trike"],
        2: ["Bagger", "Chief", "Dark Horse", "FTR", "Scout", "Touring"]
    }


    const [formState, setFormState] = useState({
        "name" : "",
        "price" : "",
        "mileage" : "",
        "color" : "",
        "brandId" : "",
        "modelName" : "",
        "dealerId" : "",
        "description" : "",
    });


    const [selectedFile, setSelectedFile] = useState(null);
    const [createStatus, setCreateStatus] = useState(0);

    const handleOnChange = function(e) {
        const { name, value, type} = e.target;
        setCreateStatus(null)
        setFormState({
            ...formState, 
            [name] : type==="number" ? Number(value) : value})
    }

    const handleSubmit = async function() {
        event.preventDefault();
        const formData = new FormData();
        Object.entries(formState).forEach(([key, value]) => {
            formData.append(key, value)
        })

        if (selectedFile !== null) {
            formData.append("imageFile", selectedFile)
        }
        console.log("Отправляемый объект: ", formData)


        try {
            const response = await axios.post("https://localhost:7001/api/motorcycles/create", formData);
            console.log("Успешно создано:", response.data);
            console.log(response);
            setFormState({
                "name" : "",
                "price" : "",
                "mileage" : "",
                "color" : "",
                "brandId" : "",
                "modelName" : "",
                "dealerId" : "",
                "description" : "",
            })
            response.status === 200 ? setCreateStatus(200) : setCreateStatus(404)
            
        } catch (error) {
            console.error("Ошибка при отправке данных:", error);
            setCreateStatus(false)
        }
    }


    return(
        <main className="create-page">
            <div className="create-box">
                <h2 className="create-header">Добавление товара</h2>
                <form action={handleSubmit} className="create-form" id="create-form" name="create-form">
                    <input 
                        type="text" 
                        placeholder="Введите название"
                        name="name"
                        form="create-form"
                        className="create-form-elem"
                        onChange={handleOnChange}
                        value={formState.name}
                        required
                    />

                    <input 
                        type="number" 
                        placeholder="Введите цену"
                        name="price"
                        className="create-form-elem"
                        min="0"
                        value={formState.price}
                        onChange={handleOnChange}
                        required
                    />

                    <input 
                        type="number" 
                        placeholder="Введите пробег"
                        name="mileage"
                        className="create-form-elem"
                        min="0"
                        value={formState.mileage}
                        onChange={handleOnChange}
                    />

                    <input 
                        type="text" 
                        placeholder="Введите цвет"
                        name="color"
                        id="color"
                        className="create-form-elem"
                        value={formState.color}
                        onChange={handleOnChange}
                        required
                    />

                    <select 
                        className="create-form-elem" 
                        name="brandId" 
                        id="brandId" 
                        form="create-form"
                        value={formState.brandId || ""} // Гарантируем строку вместо null
                        onChange={handleOnChange} 
                        required
                    >
                        <option value="" disabled selected>Выберите бренд мотоцикла</option>
                        {Object.keys(brands).map((brandKey => (
                            <option key={brandKey} value={brandKey}>{brands[brandKey]}</option>
                        )))}
                    </select>

                    <select 
                        className="create-form-elem" 
                        name="modelName" 
                        id="model" 
                        form="create-form"
                        value={formState.modelName || ""}
                        onChange={handleOnChange} 
                        required 
                        disabled={!formState.brandId}
                    >
                        <option value="" disabled selected>Выберите модель мотоцикла</option>
                        {
                            formState.brandId && 
                            models[formState.brandId].map((modelName => (
                                <option key={modelName} value={modelName}>{modelName}</option>
                            )))
                        }
                        {/* <option>Scout</option>
                        <option>Pan America</option> */}
                    </select>

                    <select 
                        className="create-form-elem" 
                        name="dealerId" 
                        id="dealer" 
                        form="create-form" 
                        value={formState.dealerId || ""}
                        onChange={handleOnChange}
                        required
                    >
                        <option value="" disabled selected>Выберите дилера мотоцикла</option>
                        {Object.keys(dealers).map((dealerKey => (
                            <option key={dealerKey} value={dealerKey}>{dealers[dealerKey]}</option>
                        )))}
                    </select>

                    <textarea 
                        name="description"
                        form="create-form" 
                        className="create-description"
                        placeholder="Введите описание товара"
                        rows='4'
                        cols="33"
                        onChange={handleOnChange}
                        value={formState.description}
                    />

                    <input 
                        type="file" 
                        name="imageFile"   
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <button type="submit">Добавить</button>
                    <div className={createStatus === 200 ? "create-result done" : "create-result error"}>
                        {createStatus === 200 && "Товар успешно добавлен"}
                        {createStatus === 404 && "Возникла ошибка при добавлении товара"}
                    </div>
                </form>
            </div>
        </main>
    )
}