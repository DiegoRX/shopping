import NavBar from "./components/NavBar"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/cartSlice";





export default function ShoppingCart() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log(cartItems)
    const dispatch = useDispatch()
    return (
        <div>
            <NavBar />
            <h1>ShoppingCart</h1>
            <Link to="/products">Go Back</Link>

            {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <img src={item.img} alt={item.title} />
                        <p>Cantidad: {item.amount}</p>
                        <button onClick={() => dispatch(increment(item.id))}>+</button>
                        <button onClick={() => dispatch(decrement(item.id))}>-</button>
                    </div>
                ))
            ) : (
                <p>No hay productos en el carrito.</p>
            )}

        </div>
    )
}