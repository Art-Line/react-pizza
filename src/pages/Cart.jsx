import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as IcoClear } from '../img/clear.svg';
import { ReactComponent as IcoCart } from '../img/cart.svg';
import CartItem from '../components/CartItem';
import { clearItems } from '../redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector((state) => state.cart);             // redux
    const totalCount = items.reduce((sum,item) => sum + item.count, 0);

    if(!totalPrice) {
        return (
            <p className='ta-c'>Cart  is empty</p>
        )
    }

    return (
        <section className="cart">
            <div className="cart__top">
                <div className="cart__top-title">
                    <IcoCart />
                    <h1>Cart</h1>
                </div>
                <button className="cart__top-btn" type="button" onClick={() => dispatch(clearItems())}>
                    <IcoClear />
                    Clear
                </button>
            </div>
            <div className="cart__list">
                {items.map(item => <CartItem key={item.id} {...item} />)}
            </div>
            <div className="cart__down">
                <div>Total pizzas: <b>{totalCount}</b></div>
                <div>Order amount: <b>{totalPrice}$</b></div>
            </div>
        </section>
    )
}

export default Cart;
