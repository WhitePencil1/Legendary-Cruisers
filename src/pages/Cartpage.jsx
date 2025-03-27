import { useEffect, useState } from 'react'
import '../styles/cart.css'
import CartItem from '../components/CartItem'
import { pricePrettier } from '../utils';

export default function Cartpage() {

    const [cartItems, setCartItems] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [ableToBuy, setAbleToBuy] = useState(false);

    useEffect(() => {
        let cart = localStorage.getItem("cart");
        const parsedCart = JSON.parse(cart);
        setCartItems(parsedCart)
        const totalSum = parsedCart.reduce((total, cartItem) => total + cartItem.price, 0);
        setTotalPrice(totalSum)
    }, [])

    useEffect(() => {
        if(cartItems.length === 0) {
            setAbleToBuy(false)
        } else {
            setAbleToBuy(true)
        }
        
        const newTotalSum = cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
        setTotalPrice(newTotalSum);
    }, [cartItems])
    

    return(
        <main className="cart">
            <h1>Корзина</h1>

            {
                cartItems.length === 0 ? 
                (   
                    <div className='clear-cart-title'>
                        Ваша корзина пустует!
                    </div>
                ) : 
                (
                    <table className="cart-items">
                        <tbody>
                            {cartItems.map(item => (
                                <CartItem itemData={item} key={item.id} setCartItems={setCartItems}/>
                            ))}
                        </tbody>
                    </table>
                )
            }

            <div className="cart-submit-container">
                
                <div className="cart-submit-row">
                    <span>Итоговая стоимость:</span>
                    <b><span className="total-price">{pricePrettier(totalPrice)}</span> &#8381;</b>
                </div>
                
                <button className={ableToBuy ? "cart-submit-btn" : "cart-submit-btn btn-clicked"} disabled={!ableToBuy}>Оформить заказ</button>
            </div>
        </main>
    )
}