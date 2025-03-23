import { useEffect, useState } from 'react'
import axios from "axios";
import '../styles/product.css'

export default function ProductModal({productId, onClose}) {

    useEffect(() => {
        axios.get("https://localhost:7001/catalog/product?id=" + productId)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Ошибка загрузки модалки!");
        });
    }, [])


    return(
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content'>

                <section className="showcase">
                    <div className="product-image-box">
                        <img src="images/motorcycles/1.webp" alt="product image" className="product-main-image"/>
                    </div>
                    <div  className="product-title-box">
                        <h1 className="product-title">Мотоцикл Harley-Davidson Breakout 117 Vivid Chery 2023</h1>
                        <div className="product-price">4 350 000 &#8381;</div>

                        <ul className="product-parameters-list">
                            <li className="product-parameter">Цвет<br/><span className="product-parameter-value color">?</span></li>
                            <li className="product-parameter">Объем, см3<br/><span className="product-parameter-value volume">?</span></li>
                            <li className="product-parameter">Осталось <br/><span className="product-parameter-value left">?</span></li>
                        </ul>
                        <div>
                            <p>Oригинальный пробег <span className="mileage">?</span> км.</p>
                            <p>Двигатель <span className="engine">?</span></p>
                            <p>Емкость <span className="tank"></span> см3</p>
                        </div>
                        <button className="product-submit-btn">В корзину</button>
                    </div>
                </section>

                <section className="description">
                    <h1 className="description-title">Описание</h1>
                    <div className="description-content">
                        ????
                    </div>
                    {/* <table className="product-characteristics">
                        <thead>
                            <tr><th>Характеристика</th><th>Значение</th></tr>
                        </thead>
                        <tbody className="product-characteristics-body">
                        </tbody>
                    </table> */}
                </section>

            </div>
        </div>
    )
}