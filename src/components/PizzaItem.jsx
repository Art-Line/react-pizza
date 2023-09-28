import { ReactComponent as IcoAdd } from '../img/plus.svg';

import Item from '../img/item.jpg'

function PizzaItem() {

    return (
        <article className="pizza-item">
            <div className="pizza-item__pic">
                <img
                    className="img-responsive"
                    src={Item}
                    alt="Pizza"
                />
            </div>
            <h3 className="pizza-item__title">Pizza</h3>
            <div className="pizza-item__selector">
                <ul className="pizza-item__selector-list">
                    <li><button className="active" type="button">thin</button></li>
                    <li><button type="button">traditional</button></li>
                </ul>
                <ul className="pizza-item__selector-list">
                    <li><button className="active" type="button">L</button></li>
                    <li><button type="button">XL</button></li>
                    <li><button type="button">XXL</button></li>
                </ul>
            </div>
            <div className="pizza-item__bottom">
                <div className="pizza-item__price">30$</div>
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
