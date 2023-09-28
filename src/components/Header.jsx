import { ReactComponent as IcoCart } from '../img/cart.svg';
import Logo from '../img/logo.svg'

function Header() {
    return (
        <header className="header">
            <a href="!#" className="header__logo">
                <img src={Logo} alt="react pizza" />
                REACT PIZZA
            </a>
            <a href="!#" className="header__cart">
                <div className="header__cart-price">28$</div>
                <div className="header__cart-num">
                    <IcoCart />
                    3
                </div>
            </a>
        </header>
    )
}

export default Header;
