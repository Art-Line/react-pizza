import { useState } from 'react';
import { ReactComponent as IcoArrow } from '../img/arrow.svg';

function Sort() {

    const [sortTooltip, setSortTooltip] = useState(false);  // show/hide tooltip
    const sortList = ['popularity', 'price', 'alphabet'];   // sort list 
    const [activeSort, setActiveSort] = useState(0);        // for active sort

    const showSort = (index) => {
        setActiveSort(index);   // shwow active name
        setSortTooltip(false);  // close tooltip
    }

    return (
        <div className="sort">
            <div className={(sortTooltip ? 'sort__label active' : 'sort__label')}>
                <IcoArrow />
                <b>Sort by:</b>
                <button type="button" onClick={() => setSortTooltip(!sortTooltip)}>{sortList[activeSort]}</button>
            </div>
            {sortTooltip &&
                <ul className="sort__popup">
                    {sortList.map((item, index) => {
                        return (
                            <li key={index}>
                                <button
                                    onClick={() => showSort(index)}
                                    className={activeSort === index ? 'active' : ''}
                                    type="button">
                                    {item}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default Sort;
