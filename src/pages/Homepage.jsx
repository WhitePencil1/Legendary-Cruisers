export default function Homepage() {
    return(
        <main>
            <section className="photo-zone"><img src="images/indian_novost_211015_banner_main.jpg" alt="Фото"/></section>
            
            <section className="brand">
                <h1 className="brand-title">Мотоциклы Indian</h1>
                <div className="brand-article-container">
                    <img src="icons/IndianLogo.png" alt="indian-logo" className="brand-article-logo"/>
                    <article className="brand-article-content">
                        <h2>ПЕРВАЯ АМЕРИКАНСКАЯ МОТОЦИКЛЕТНАЯ КОМПАНИЯ</h2>
                        <div className="brand-article-content">Indian Motorcycle Company, дочерняя компания Polaris Industries Inc., является первой мотоциклетной компанией в Америке. Основанная в 1901 году, компания Indian Motorcycle завоевала сердца мотоциклистов всего мира и заслужила признание как один из самых легендарных и знаковых брендов Америки благодаря непревзойденному господству в гонке, инженерному мастерству и бесчисленным инновациям и главенству в отрасли.</div>
                    </article>
                </div>
                <div className="model-line">
                    <h2 className="model-line-title">Модельный ряд мотоциклов</h2>
                    <ul className="model-line-items">
                        <li><img src="images/5b895b10a72fa_695_411_5_80.jpg" alt="model-photo" className="model-img"/></li>
                        <li><img src="images/bobber_20_intl_abs_thunder_black_front_3q_695_411_5_80.jpg" alt="model-photo" className="model-img"/></li>
                        <li><img src="images/indian_main_695_411_5_80.jpg" alt="model-photo" className="model-img"/></li>
                    </ul>
                    <a href="catalog.html" className="all-models-btn">Все модели</a>
                </div>
            </section>

            <br/>

            <section className="brand">
                <h1 className="brand-title">Мотоциклы Harley-Davidson</h1>
                <div className="brand-article-container">
                    <img src="icons/HarleyLogo.png" alt="harley-logo" className="brand-logo-harley"/>
                    <article className="brand-article-content">
                        <h2>ЛЕГЕНДА СКОРОСТИ, СТИЛЯ И СВОБОДЫ</h2>
                        <div>Harley-Davidson — это легендарный бренд, олицетворяющий дух свободы и бунтарства уже более 120 лет. Основанная в 1903 году в маленьком гараже в Милуоки, компания стала символом мощи и стиля, изменив мир мотоциклов. Каждая модель Harley-Davidson сочетает в себе традиции ручной работы, культовый звук двигателя V-twin и безграничные возможности для персонализации. Это мотоцикл для тех, кто ценит свободу, мечтает покорять дороги и быть частью глобального сообщества единомышленников. С Harley-Davidson вы не просто едете — вы переживаете приключение, которое начинается с первым поворотом ключа.</div>
                    </article>
                </div>
                <div className="model-line">
                    <h2 className="model-line-title">Модельный ряд мотоциклов</h2>
                    <ul className="model-line-items">
                        <li><img src="images/motorcycles/main_fat_bob.webp" alt="model-photo" className="model-img"/></li>
                        <li><img src="images/motorcycles/main_softail_standart.webp" alt="model-photo" className="model-img"/></li>
                        <li><img src="images/motorcycles/main_nighster.webp" alt="model-photo" className="model-img"/></li>
                    </ul>
                    <a href="catalog.html" className="all-models-btn">Все модели</a>
                </div>
            </section>
        </main>
    )
}