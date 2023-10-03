import { ReactComponent as IcoClear } from '../img/clear.svg';
import { ReactComponent as IcoPlus } from '../img/plus.svg';
import { ReactComponent as IcoMinus } from '../img/minus.svg';
import { ReactComponent as IcoCart } from '../img/cart.svg';

function Cart() {
    return (
        <section className="cart">
            <div className="cart__top">
                <div className="cart__top-title">
                    <IcoCart />
                    <h1>Cart</h1>
                </div>
                <button className="cart__top-btn" type="button">
                    <IcoClear />
                    Clear
                </button>
            </div>
            <div className="cart__list">
                <div className="cart__item">
                    <div className="cart__item-main">
                        <div className="cart__item-img">
                            <img
                                className="img-responsive"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt=""
                            />
                        </div>
                        <div className="cart__item-info">
                            <p className="cart__item-info-title">Cheese pizza</p>
                            <p className="cart__item-info-name">thin, L</p>
                        </div>
                    </div>
                    <div className="cart__item-count">
                        <div className="cart__item-count-btn" type="button">
                            <IcoMinus />
                        </div>
                        <b>2</b>
                        <div className="cart__item-count-btn" type="button">
                            <IcoPlus />
                        </div>
                    </div>
                    <div className="cart__item-price">
                        <b>24$</b>
                    </div>
                    <div className="cart__item-remove">
                        <button className="cart__item-remove-btn" type="button">
                            <IcoPlus />
                        </button>
                    </div>
                </div>
                <div className="cart__item">
                    <div className="cart__item-main">
                        <div className="cart__item-img">
                            <img
                                className="img-responsive"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt=""
                            />
                        </div>
                        <div className="cart__item-info">
                            <p className="cart__item-info-title">Cheese pizza</p>
                            <p className="cart__item-info-name">thin, L</p>
                        </div>
                    </div>
                    <div className="cart__item-count">
                        <div className="cart__item-count-btn" type="button">
                            <IcoMinus />
                        </div>
                        <b>2</b>
                        <div className="cart__item-count-btn" type="button">
                            <IcoPlus />
                        </div>
                    </div>
                    <div className="cart__item-price">
                        <b>24$</b>
                    </div>
                    <div className="cart__item-remove">
                        <button className="cart__item-remove-btn" type="button">
                            <IcoPlus />
                        </button>
                    </div>
                </div>
            </div>
            <div className="cart__down">
                <div>Total pizzas: 3.</div>
                <div>Order amount: $900.</div>
            </div>
        </section>
    )
}

export default Cart;
