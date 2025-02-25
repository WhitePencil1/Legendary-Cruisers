import '../styles/cart.css'

export default function Cartpage() {
    return(
        <main className="cart">
            <h1>Корзина</h1>
            <table className="cart-items">
                <tbody>
                    <tr className="cart-item">
                        <td><img className="cart-item-img" src="img/motorcycles/1.webp" alt="Motorcycle"/></td>
                        <td>Harley-Davidson FXDR 114 (Vivid Black)</td>
                        <td><span className="cart-item-unit-price">2 550 000</span> &#8381;/шт</td>
                        <td>
                            <input className="cart-item-count" type="number" value="1" min="1"/>
                        </td>

                        <td>
                            <b>
                                <span className="cart-item-price-total">2 550 000</span> &#8381;
                            </b>
                        </td>
                        <td><button className="cart-item-btn-delete">X</button></td>
                    </tr>

                    <tr className="cart-item">
                        <td><img className="cart-item-img" src="img/motorcycles/2.webp" alt="Motorcycle"/></td>
                        <td>CVO Road Glide Harley-Davidson (Blue Steel) 2022 c НДС!</td>
                        <td><span className="cart-item-unit-price">4 950 000</span> &#8381;/шт</td>
                        <td>
                            <input className="cart-item-count" type="number" value="1" min="1"/>
                        </td>
                        <td>
                            <b>
                                <span className="cart-item-price-total">4 550 000</span> &#8381;
                            </b>
                        </td>
                        <td><button className="cart-item-btn-delete">X</button></td>
                    </tr>

                    <tr className="cart-item">
                        <td><img className="cart-item-img" src="img/motorcycles/3.webp" alt="Motorcycle"/></td>
                        <td>Harley-Davidson FXDR 114 (Vivid Black)</td>
                        <td><span className="cart-item-unit-price">4 950 000</span> &#8381;/шт</td>
                        <td>
                            <input className="cart-item-count" type="number" value="1" min="1"/>
                        </td>
                        <td>
                            <b>
                                <span className="cart-item-price-total">3 550 000</span> &#8381;
                            </b>
                        </td>
                        <td><button className="cart-item-btn-delete">X</button></td>
                    </tr>
                </tbody>
                
            </table>

            <div className="cart-submit-container">
                <div className="cart-submit-row">
                    <span>Товары</span>
                    <b className="items-total-count">0</b>
                </div>
                
                <div className="cart-submit-row">
                    <span>Итого:</span>
                    <b><span className="total-price">0</span> &#8381;</b>
                </div>
                
                <button className="cart-submit-btn">Оформить заказ</button>
            </div>
        </main>
    )
}