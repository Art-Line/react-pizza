import { ReactComponent as IcoArrow } from '../img/arrow.svg';

function Sort() {
    return (
        <div class="sort">
            <div class="sort__label">
                <IcoArrow />
                <b>Sort by:</b>
                <span>popularity</span>
            </div>
            <ul class="sort__popup">
                <li><button type="button" className="active">popularity</button></li>
                <li><button type="button">price</button></li>
                <li><button type="button">alphabet</button></li>
            </ul>
        </div>
    )
}

export default Sort;
