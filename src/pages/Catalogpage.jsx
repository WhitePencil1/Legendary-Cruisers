import '../styles/catalog.css'
import { Link } from 'react-router-dom'

export default function Catalogpage() {
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
                <Link to="product" className="product-card-box">
                    <img src="images/motorcycles/1.webp" alt="product" className="product-card-image"/>
                    <div className="product-card-info">
                        <div>Harley-Davidson Softail Slim 2019 (Custom)</div>
                        <strong>1 900 000&#8381;</strong>
                    </div>  
                </Link>
            </div>
        </main>
    )
}
    
    