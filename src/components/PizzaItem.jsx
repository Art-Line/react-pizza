import { useState } from 'react';
import { ReactComponent as IcoAdd } from '../img/plus.svg';


function PizzaItem({ imgUrl, title, sizes, price, types }) {

    const pizzaTypes = ['thin', 'traditional'];
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    return (
        <article className="pizza-item">
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
                <button type="button" className="pizza-item__btn-add">
                    <IcoAdd />
                    <span>Add</span>
                    <i>2</i>
                </button>
            </div>
        </article>
    )
}

export default PizzaItem;
