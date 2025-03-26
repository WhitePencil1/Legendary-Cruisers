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

    const TEST_DATA = {
        "name" : "Мотоцикл Harley-Davidson Fat Boy (120th Anniversary) 2023 ",
        "price" : 4650000,
        "mileage" : 100,
        "color" : "Красный",
        "brandId" : 1,
        "modelName" : "Softail",
        "dealerId" : 2,
        "description" : "Новенький, сочный красный",
    }

    const [formState, setFormState] = useState({
        "name" : "",
        "price" : 0,
        "mileage" : 0,
        "color" : "",
        "brandId" : null,
        "modelName" : null,
        "dealerId" : null,
        "description" : null,
    });

    useEffect(() => {setFormState(TEST_DATA)}, [])

    const [selectedFile, setSelectedFile] = useState(null);

    const handleOnChange = function(e) {
        const { name, value} = e.target;
        setFormState({...formState, [name] : value})
    }

    const handleSubmit = async function() {
        event.preventDefault();
        const formData = new FormData();
        Object.entries(formState).forEach((key, value) => {
            formData.append(key, value)
        })

        if (selectedFile !== null) {
            formData.append("imageFile", selectedFile)
        }
        console.log("Отправляемый объект: ", formData)

        const response = await fetch("https://localhost:7001/api/motorcycles/create", {
            method: "POST",
            body: formData,
        });
    
        const result = await response.json();
        console.log(result);
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
                        value={formState.brandId}
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
                        onChange={handleOnChange} 
                        required 
                        disabled={formState.brandId === null}
                    >
                        <option value="" selected>Выберите модель мотоцикла</option>
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
                        defaultValue={'DEFAULT'} 
                        name="dealerId" 
                        id="dealer" 
                        form="create-form" 
                        onChange={handleOnChange}
                        required
                    >
                        <option value="DEFAULT" disabled selected>Выберите дилера мотоцикла</option>
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
                        accept="image/"    
                        onChange={(e) => setSelectedFile(e.value)}
                    />
                    <button type="submit">Добавить</button>
                </form>
            </div>
        </main>
    )
}