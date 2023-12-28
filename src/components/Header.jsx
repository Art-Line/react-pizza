import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as IcoCart } from '../img/cart.svg';
import Logo from '../img/logo.svg'
import Search from './Search';

function Header() {

    const {totalPrice, items} = useSelector(state => state.cart);    // redux
    const totalCount = items.reduce((sum,item) => sum + item.count, 0)

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={Logo} alt="react pizza" />
                REACT PIZZA
            </Link>
            <Link to="/cart" className="header__cart">
                <div className="header__cart-price">{totalPrice}$</div>
                <div className="header__cart-num">
                    <IcoCart />
                    {totalCount}
                </div>
            </Link>
            <Search />
        </header>
    )
}

export default Header;
