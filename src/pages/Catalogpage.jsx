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

    const take = 6;

    const [filters, setFilters] = useState({
        "search" : "",
        "models" : [],
        "engineVolumes" : [],
        "priceFrom" : "",
        "priceTo" :"",
        "mileageFrom" : "",
        "mileageTo" : ""  
    })

    const handleFilterChange = (e) => {
        const { name, value, type, checked} = e.target;
        if (type === "checkbox") {
            setFilters((prev) => {
                const updatedArray = checked ? [...prev[name], value] : prev[name].filter((item) => item != value);
                return {...prev, [name]: updatedArray};
            })
        } else {
            setFilters({...filters, [name]: value})
        }
    }
    
    const handleReset = (e) => {
        e.preventDefault();
        setFilters({
            priceFrom: "",
            priceTo: "",
            mileageFrom: "",
            mileageTo: "",
            models: [],
            engineVolumes: [],
        });
    };

    const handleFiltersSubmit = (e) => {
        e.preventDefault();
        console.log("Отправка фильтров");
        const params = Object.fromEntries(
            Object.entries(filters)
                .filter(([_, value]) => value !== "" && value !== null) // Убираем пустые значения
                .map(([key, value]) => [key, Array.isArray(value) ? value : value.toString()])
        );
    
        axios.get("https://localhost:7001/api/motorcycles/catalog", {
            params,
            paramsSerializer: (params) => {
                return Object.entries(params)
                    .map(([key, value]) =>
                        Array.isArray(value)
                            ? value.map((v) => `${key}=${encodeURIComponent(v)}`).join("&")
                            : `${key}=${encodeURIComponent(value)}`
                    )
                    .join("&");
            }
        })
        .then((response) => {
            console.log("Результат запроса:", response.data);
            setProductData(response.data);
            // onFilter(response.data); // Передаем данные в родительский компонент
        })
        .catch((error) => console.error("Ошибка загрузки каталога:", error));
    }

    useEffect(() => {
        axios.get("https://localhost:7001/api/motorcycles/catalog?skip=0&take=" + take)
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
            <form className="catalog-sidebar" onSubmit={handleFiltersSubmit}>
                <div className="sidebar-serach-box">
                    <img src="/public/icons/loupe.png" alt="loupe"/>
                    <input 
                        type="text" 
                        className="sidebar-search-field" 
                        placeholder="Поиск по названию" 
                        name="search"
                        value={filters.search}
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title sidebar-models">Модели</div>
                    <p>Harley-Davidson</p>
                    <ul className="sidebar-list">
                        {["Street", "Sportster", "Softail", "Pan America", "CVO", "Trike"].map((model) => (
                            <li key={model}>
                                <input
                                    type="checkbox"
                                    name="models"
                                    value={model}
                                    onChange={handleFilterChange}
                                    checked={filters.models.includes(model)}
                                />
                                {model}
                            </li>
                        ))}
                    </ul>

                    <p>Indian</p>
                    <ul className="sidebar-list">
                        {["FTR", "Scout", "Chief", "Bagger", "Touring", "Dark Horse"].map((model) => (
                            <li key={model}>
                                <input
                                    type="checkbox"
                                    name="models"
                                    value={model}
                                    onChange={handleFilterChange}
                                    checked={filters.models.includes(model)}
                                />
                                {model}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Цена</div>
                    <input 
                        className="sidebar-number-input" 
                        type="number" 
                        name="priceFrom" 
                        placeholder="от"
                        value={filters.priceFrom}
                        onChange={handleFilterChange}
                    />
                    <span>-</span>
                    <input 
                        className="sidebar-number-input" 
                        type="number" 
                        name="priceTo"
                        placeholder="до"
                        value={filters.priceTo}
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Объем двигателя, см3</div>
                    <ul className="sidebar-list">
                        {["1600", "1745", "1868", "1923", "1250", "975"].map((volume) => (
                            <li key={volume}>
                                <input
                                    type="checkbox"
                                    name="engineVolumes"
                                    value={volume}
                                    onChange={handleFilterChange}
                                    checked={filters.engineVolumes.includes(volume)}
                                />
                                {volume}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar-filter-category">
                    <div className="sidebar-title">Пробег, км</div>
                    <input 
                        className="sidebar-number-input" 
                        type="number" 
                        name="mileageFrom" 
                        placeholder="от"
                        value={filters.mileageFrom}
                        onChange={handleFilterChange}
                    />
                    <span>-</span>
                    <input 
                        className="sidebar-number-input" 
                        type="number" 
                        name="mileageTo"
                        placeholder="до"
                        value={filters.mileageTo}
                        onChange={handleFilterChange}
                    />
                </div>
                <button className="sidebar-submit" type="submit">Применить</button>
                <button className="sidebar-submit" type="button" onClick={handleReset}>Сбросить</button>
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
    
    