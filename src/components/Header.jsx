import { Link } from 'react-router-dom';
import { ReactComponent as IcoCart } from '../img/cart.svg';
import Logo from '../img/logo.svg'
import Search from './Search';

function Header({searchValue, setSearchValue}) {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={Logo} alt="react pizza" />
                REACT PIZZA
            </Link>
            <Link to="/cart" className="header__cart">
                <div className="header__cart-price">28$</div>
                <div className="header__cart-num">
                    <IcoCart />
                    3
                </div>
            </Link>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </header>
    )
}

export default Header;
