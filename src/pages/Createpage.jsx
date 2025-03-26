import "../styles/create.css"

export default function Createpage() {

    return(
        <main className="create-page">
            <div className="create-box">
                <h2 className="create-header">Добавление товара</h2>
                <form action="" className="create-form" name="create-form">
                    <input 
                        type="text" 
                        placeholder="Введите название"
                        name="name"
                        className="create-form-elem"
                        required
                    />

                    <input 
                        type="number" 
                        placeholder="Введите цену"
                        name="price"
                        className="create-form-elem"
                        min="0"
                        required
                    />


                    <input 
                        type="number" 
                        placeholder="Введите пробег"
                        name="mileage"
                        className="create-form-elem"
                        min="0"
                    />


                    <input 
                        type="text" 
                        placeholder="Введите цвет"
                        name="color"
                        className="create-form-elem"
                        required
                    />


                    <select className="create-form-elem" name="brand" id="brand" form="create-form" required>
                        <option value="" disabled selected>Выберите бренд мотоцикла</option>
                        <option value="Harley">Harley-Davidson</option>
                        <option value="Indian">Indian</option>
                    </select>


                    <select className="create-form-elem" name="model" id="model" form="create-form" required disabled>
                        <option value="" disabled selected>Выберите модель мотоцикла</option>
                        <option>Scout</option>
                        <option>Pan America</option>
                    </select>

                    <input 
                        type="file" 
                        accept="image/"    
                    />

                    <button type="submit">Добавить</button>
                </form>
            </div>
        </main>
    )
}