import { pricePrettier } from "../utils"

/* eslint-disable react/prop-types */
export default function CartItem({itemData, setCartItems}) {
    const dealers = {
        1 : "Legendary Cruisers Самара",
        2 : "Legendary Cruisers Новосибирск",
        3: "Legendary Cruisers Красноярск",
        4: "Legendary Cruisers Казань"
    }

    const handleItemDelete = function () {
        let cart = localStorage.getItem("cart");
        const parsedCart = JSON.parse(cart);
        let newCart = parsedCart.filter(cartItem => cartItem.id !== itemData.id)
        localStorage.setItem("cart", JSON.stringify(newCart))
        setCartItems(newCart)
    }

    return(
        <tr className="cart-item">

            <td><img className="cart-item-img" src={"https://localhost:7001" + itemData.image} alt="MotorcycleImg"/></td>
            <td>{itemData.name}</td>
            <td>
                <span className="cart-item-unit-price">{dealers[itemData.dealerId]}</span>
            </td>
            <td>
                <span>В наличии</span>
            </td>

            <td>
                <b>
                    <span className="cart-item-price-total">{pricePrettier(itemData.price)}</span> &#8381;
                </b>
            </td>

            <td><button className="cart-item-btn-delete" onClick={() => handleItemDelete()}>X</button></td>
        </tr>
    )
}