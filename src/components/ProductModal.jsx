import { useEffect, useState } from 'react'
import axios from "axios";
import '../styles/product.css'

export default function ProductModal({productId, onClose}) {

    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const imgDirPath = "https://localhost:7001";

    useEffect(() => {
        setLoading(true);
        axios.get("https://localhost:7001/api/motorcycles/catalog/product/" + productId)
        .then((response) => {
            console.log(response.data);
            setProductData(response.data)
            setLoading(false);
        })
        .catch((error) => {
            console.log("Ошибка загрузки модалки!");
            setError(true);
        });
    }, [productId])

    if (loading) {
        return(
            <div>
                <p>Загразка...</p>
            </div>
        )
    }

    else {
        return(
            <div className='modal-overlay' onClick={onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <button className='close-btn' onClick={onClose}>X</button>
                    <section className="showcase">
                        <div className="product-image-box">
                            {console.log(imgDirPath + productData.image)}
                            <img src= {imgDirPath + productData.image} alt="product image" className="product-main-image"/>
                        </div>
                        <div className="product-title-box">
                            <h1 className="product-title">{productData.name}</h1>
                            <div className="product-price">{productData.price} &#8381;</div>
    
                            <ul className="product-parameters-list">
                                <li className="product-parameter">Цвет<br/><span className="product-parameter-value color">{productData.color}</span></li>
                                <li className="product-parameter">Объем, см3<br/><span className="product-parameter-value volume">{productData.model.engineVolume}</span></li>
                                <li className="product-parameter">Модель <br/><span className="product-parameter-value left">{productData.model.name}</span></li>
                            </ul>
                            <div>
                                <p>Oригинальный пробег <span className="mileage">{productData.mileage}</span> км.</p>
                                <p>Двигатель <span className="engine">{productData.model.engine}</span></p>
                                <p>Емкость <span className="tank"></span>{productData.model.tankCapacity} см3</p>
                            </div>
                            <button className="product-submit-btn">В корзину</button>
                        </div>
                    </section>
    
                    <section className="description">
                        <h1 className="description-title">Описание</h1>
                        <div className="description-content">
                            {productData.description}
                        </div>
                        <table className="product-characteristics">
                            <thead>
                                <tr><th>Характеристика</th><th>Значение</th></tr>
                            </thead>
                            <tbody className="product-characteristics-body">
                                <tr> 
                                    <td>Двигатель</td>
                                    <td>{productData.model.engine}</td> 
                                </tr>
                                <tr> 
                                    <td>Рабочий объем</td> 
                                    <td>{productData.model.engineVolume}, см3</td> 
                                </tr>
                                <tr> 
                                    <td>Длина</td> 
                                    <td>{productData.model.length}, см</td> 
                                </tr>
                                <tr> 
                                    <td>Емкость бака</td> 
                                    <td>{productData.model.tankCapacity}, см3</td> 
                                </tr>
                                <tr> 
                                    <td>Высота по сиденью</td> 
                                    <td>{productData.model.seatHeight} см</td> 
                                </tr>
                                <tr> 
                                    <td>Сухая масса</td> 
                                    <td>{productData.model.dryWeight} кг</td> 
                                </tr>
                                <tr> 
                                    <td>Передняя шина</td> 
                                    <td>{productData.model.frontTire}</td> 
                                </tr>
                                <tr> 
                                    <td>Задняя шина</td> 
                                    <td>{productData.model.rearTire}</td> 
                                </tr>
                            </tbody>
                        </table>
                    </section>
    
                </div>
            </div>
        )
    }
    
}