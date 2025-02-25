import '../styles/about_us.css'

export default function Aboutpage() {
    return(
        <main className='about-us'>
            <div className="about-us-welcome">
                <h1>Legendary Cruisers Самара, Новосибирск, Красноярск, Казань</h1>
                <p>Наши дилерские центры расположены: Новосибирск, Красноярск, Казань, Самара</p>
                <p>Мы любим работать с мотоциклами Harley-Davidson и Indian. Наша деятельность основывается на успешном опыте превосходного обслуживания и приверженности нашим клиентам.</p>
                <img src="images/bestDiller.png" alt="Best diller awards" width="350"/>
            </div>
            <article className="dealer-center">
                <h2 className="dealer-center-header">
                    Legendary Cruisers Самара
                </h2>
                <p><b>Дилерский центр открылся в марте 2018 г.,<br/>расположен по адресу: 443080, Россия, Самара, ул. Авроры, 154</b></p>
                <p className="dealer-center-contacts">Телефон +7 (846) 202-02-12. Email: info@hd-samara.com</p>
                <img className="dealer-center-img" src="images/dealerCenters/SamaraDealer.jpg" alt="Dealer center"/>
            </article>


            <article className="dealer-center">
                <h2 className="dealer-center-header">
                    Legendary Cruisers Новосибирск
                </h2>
                <p><b>Дилерский центр открылся в сентябре 2014 года,<br/>расположен по адресу: Новосибирск, ул. Станционная, 62/1.</b></p>
                <p className="dealer-center-contacts">Телефон +7 (383) 36-36-580. Email: info@hd-novosibirsk.ru</p>
                <img className="dealer-center-img" src="images/dealerCenters/NovosibDealer.jpg" alt="Dealer center"/>
            </article>

            <article className="dealer-center">
                <h2 className="dealer-center-header">
                    Legendary Cruisers Красноярск
                </h2>
                <p><b>Дилерский центр открылся в декабре 2016 года.<br/>расположен по адресу: Красноярск, ул. Караульная, 31. </b></p>
                <p className="dealer-center-contacts">Телефон +7 (391) 290-60-70. Email: info@hd-krsk.ru</p>
                <img className="dealer-center-img" src="images/dealerCenters/KrasnDealer.jpg" alt="Dealer center"/>
            </article>


            <article className="dealer-center">
                <h2 className="dealer-center-header">
                    Legendary Cruisers Казань
                </h2>
                <p><b>Дилерский центр открылся в мае 2019 года.<br/>расположен по адресу: 420102, Россия, Казань, ул. Поперечно-Базарная, 32.</b></p>
                <p className="dealer-center-contacts">Телефон +7 (843) 205-01-11. Email: info@hd-kzn.ru</p>
                <img className="dealer-center-img" src="images/dealerCenters/KazanDealer.jpg" alt="Dealer center"/>
            </article>

        </main>
    )
}