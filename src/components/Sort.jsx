import { useState } from 'react';
import { ReactComponent as IcoArrow } from '../img/arrow.svg';

function Sort({ sortActive, onChangeSort }) {

    const [sortTooltip, setSortTooltip] = useState(false);  // show/hide tooltip
    const sortList = [       // sort list 
        {
            name: 'popularity A-Z',
            field: 'rating'
        },
        {
            name: 'popularity Z-A',
            field: '-rating'
        },
        {
            name: 'price A-Z',
            field: 'price'
        },
        {
            name: 'price Z-A',
            field: '-price'
        },
        {
            name: 'alphabet A-Z',
            field: 'title'
        },
        {
            name: 'alphabet Z-A',
            field: '-title'
        }];

    const showSort = (obj) => {
        onChangeSort(obj);   // show active name
        setSortTooltip(false);  // close tooltip
    }

    return (
        <div className="sort">
            <div className={(sortTooltip ? 'sort__label active' : 'sort__label')}>
                <IcoArrow />
                <b>Sort by:</b>
                <button
                    type="button"
                    onClick={() => setSortTooltip(!sortTooltip)}
                >
                    {sortActive.name}
                </button>
            </div>
            {sortTooltip &&
                <ul className="sort__popup">
                    {sortList.map((obj, index) => {
                        return (
                            <li key={index}>
                                <button
                                    onClick={() => showSort(obj)}
                                    className={sortActive.field === obj.field ? 'active' : ''}
                                    type="button">
                                    {obj.name}
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
