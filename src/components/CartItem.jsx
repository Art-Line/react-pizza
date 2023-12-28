import { ReactComponent as IcoPlus } from '../img/plus.svg';
import { ReactComponent as IcoMinus } from '../img/minus.svg';
import { useDispatch} from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cartSlice';

function CartItem({id, title, imgUrl, price, count, type, size}) {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({id}))
    }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }

    return (
        <div className="cart__item">
        <div className="cart__item-main">
            <div className="cart__item-img">
                <img
                    className="img-responsive"
                    src={imgUrl}
                    alt={title}
                />
            </div>
            <div className="cart__item-info">
                <p className="cart__item-info-title">{title}</p>
                <p className="cart__item-info-name">{type}, {size}</p>
            </div>
        </div>
        <div className="cart__item-count">
            <button className="cart__item-count-btn" type="button" onClick={onClickMinus}>
                <IcoMinus />
            </button>
            <b>{count}</b>
            <button className="cart__item-count-btn" type="button" onClick={onClickPlus}>
                <IcoPlus />
            </button>
        </div>
        <div className="cart__item-price">
            <b>{price * count}$</b>
        </div>
        <div className="cart__item-remove">
            <button className="cart__item-remove-btn" type="button" onClick={() => dispatch(removeItem(id))}>
                <IcoPlus />
            </button>
        </div>
    </div>
    )
}

export default CartItem;