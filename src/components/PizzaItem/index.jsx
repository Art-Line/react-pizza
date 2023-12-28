import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { ReactComponent as IcoAdd } from '../../img/add.svg';

import { addItem } from '../../redux/cartSlice';

const pizzaTypes = ['thin', 'traditional'];

function PizzaItem({ id, imgUrl, title, sizes, price, types }) {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            imgUrl,
            price,
            type: pizzaTypes[activeType],
            size: sizes[activeSize]
        };
        dispatch(addItem(item));
    }

    return (
        <article className="pizza-item" data-id={id}>
            <div className="pizza-item__pic">
                <img
                    className="img-responsive"
                    src={imgUrl}
                    alt={title}
                />
            </div>
            <h3 className="pizza-item__title">{title}</h3>
            <div className="pizza-item__selector">
                <ul className="pizza-item__selector-list">
                    {types.map((item, index) => {
                        return (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => setActiveType(index)}
                                    className={index === activeType ? 'active' : ''}
                                >
                                    {pizzaTypes[item]}
                                </button>
                            </li>
                        )
                    })}
                </ul>
                <ul className="pizza-item__selector-list">
                    {sizes.map((item, index) => {
                        return (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => setActiveSize(index)}
                                    className={index === activeSize ? 'active' : ''}
                                >
                                    {item}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="pizza-item__bottom">
                <div className="pizza-item__price">{price}$</div>
                <button type="button" className="pizza-item__btn-add" onClick={() => onClickAdd()}>
                    <IcoAdd />
                    <span>Add</span>
                    {addedCount > 0 && <i>{addedCount}</i>}
                    
                </button>
            </div>
        </article>
    )
}

export default PizzaItem;
