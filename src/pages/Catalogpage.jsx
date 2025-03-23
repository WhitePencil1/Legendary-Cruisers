import '../styles/catalog.css'
import { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/Productmodal';


export default function Catalogpage() {

    const [selectedProductId, setSelectedProductId] = useState(null)
    const [productData, setProductData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        axios.get("https://localhost:7001/api/motorcycles/catalog?skip=0&take=6")
        .then((response) => {
            setLoading(false)
            setProductData(response.data);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false)
        });
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    return(
        <main className="catalog">
            <form className="catalog-sidebar">
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Модели</div>
                    <p>Harley-Davidson</p>
                    <ul className="sidebar-list">
                        <li><input type="checkbox"/>Street</li>
                        <li><input type="checkbox"/>Sportster</li>
                        <li><input type="checkbox"/>Softail</li>
                        <li><input type="checkbox"/>Pan America</li>
                        <li><input type="checkbox"/>Touring</li>
                        <li><input type="checkbox"/>CVO</li>
                        <li><input type="checkbox"/>Trike</li>
                    </ul>

                    <p>Indian</p>
                    <ul className="sidebar-list">
                        <li><input type="checkbox"/>FTR</li>
                        <li><input type="checkbox"/>Scout</li>
                        <li><input type="checkbox"/>Chief</li>
                        <li><input type="checkbox"/>Bagger</li>
                        <li><input type="checkbox"/>Touring</li>
                        <li><input type="checkbox"/>Dark Horse</li>
                    </ul>
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Цена</div>
                    <input className="sidebar-number-input" type="number" name="price-from" placeholder="от"/>
                    <span>-</span>
                    <input className="sidebar-number-input" type="number" placeholder="до"/>
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Объем двигателя, см3</div>
                    <ul className="sidebar-list">
                        <li><input type="checkbox"/>1600</li>
                        <li><input type="checkbox"/>1745</li>
                        <li><input type="checkbox"/>1868</li>
                        <li><input type="checkbox"/>1923</li>
                        <li><input type="checkbox"/>1250</li>
                        <li><input type="checkbox"/>975</li>
                    </ul>
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Пробег, км</div>
                    <input className="sidebar-number-input" type="number" name="price-from" placeholder="от"/>
                    <span>-</span>
                    <input className="sidebar-number-input" type="number" placeholder="до"/>
                </div>
                <button className="sidebar-submit" type="submit">Применить</button>
            </form>
            <div className="catalog-products">
                {productData && productData.map(product => (
                    <ProductCard motorcycle={product} key={product.id} onClick={() => {setSelectedProductId(product.id)}}/>
                ))}
            </div>

            {selectedProductId && <ProductModal productId={selectedProductId} onClose={() => setSelectedProductId(null)}/>}
        </main>
    )
}
    
    