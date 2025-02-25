import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
    const location = useLocation(); // Получаем текущий путь

    return(
        <>
            <header>
                <nav>
                    <img src="icons/LegendaryLogoRed.png" alt="Logo" className="our-logo"/>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="catalog">Мотоциклы</Link></li>
                        <li><Link to="history">История брендов</Link></li>
                        <li><Link to="about">О нас</Link></li>
                        <li><Link to="cart">Корзина</Link></li>
                        {location.pathname === "/catalog" && <li className="add-product-page"><a href="addProduct.html">+</a></li>}
                    </ul>
                </nav>
            </header>

            <Outlet />
            
            <footer>
                <div className="social-media-links">
                    <img src="icons/bestDiller.png" alt="brand icon"/>
                    <span>Мы в социальных сетях</span>
                    <div>
                        <a href=""><img src="icons/icons8-вконтакте.svg" alt="vk"/></a>
                        <a href=""><img src="icons/icons8-ютуб.svg" alt="youtube" width="52"/></a>
                    </div>
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td><a href="">Модельный ряд Harley-Davidson</a></td><td><a href="">История Harley-Davidson</a></td><td><a>Москва, пр. Олдскула, 63:<br/>892780056</a></td>
                        </tr>
                        <tr>
                            <td><a href="">Модельный ряд Indian</a></td><td><a href="">История Indian</a></td><td><a>Санкт-Петербург, Приморский пр., 80:<br/> 892780056</a></td>
                        </tr>
                        <tr>
                            <td><a href="">Наши солоны</a></td><td><a href="">Доставка</a></td><td><a>Казань, ул. Поперечно-Базарная, 32:<br/> 892780056</a></td>
                        </tr>
                        <tr>
                            <td><a href="">Оферта и политика конфиденциальности</a></td><td><a href="">Экипировка</a></td><td><a>Казань, ул. Поперечно-Базарная, 32:<br/> 892780056</a></td>
                        </tr>
                        <tr>
                            <td><a href="">Новости</a></td><td><a href="">Тест-драйв и прокат</a></td><td><a>Москва, пр. Олдскула, 63:<br/> 892780056</a></td>
                        </tr>
                        <tr>
                            <td colSpan="3"><a href=""><img src="icons/visa.png" alt="Реквизиты"/></a></td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </>
    )
}