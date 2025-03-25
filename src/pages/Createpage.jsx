import "../styles/create.css"

export default function Createpage() {

    return(
        <main className="create-page">
            <div className="create-box">
                <h2>Добавление товара</h2>
                <form action="" className="create-form">

                    <input 
                        type="text" 
                        placeholder="Введите название"
                        name="name"
                    />

                    <input 
                        type="number" 
                        placeholder="Введите цену"
                        name="price"
                    />


                    <input 
                        type="number" 
                        placeholder="Введите пробег"
                        name="mileage"
                    />


                    <input 
                        type="text" 
                        placeholder="Введите цвет"
                        name="color"
                    />


                    <select name="" id="" form="" required>
                        <option>Harley-Davidson</option>
                        <option>Indian</option>
                    </select>

                    <button type="submit">Добавить</button>
                </form>
            </div>
        </main>
    )
}