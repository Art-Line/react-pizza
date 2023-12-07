import { useEffect, useRef, useState } from 'react';
import { ReactComponent as IcoArrow } from '../img/arrow.svg';
import { setSort } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux';

export const sortList = [       // sort list 
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

function Sort() {

    const dispatch = useDispatch();
    const sortActive = useSelector(state => state.filters.sortActive);    // redux
    const [sortTooltip, setSortTooltip] = useState(false);  // show/hide tooltip
    const showSort = (obj) => {
        dispatch(setSort(obj))      // to redux
        setSortTooltip(false);       // close tooltip
    }

    const sortRef = useRef();
    useEffect(() => {
        //console.log('mount')
        const handleClickOutside = (event) => {
          let path = event.composedPath().includes(sortRef.current);
          if (!path) setSortTooltip(false);
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            //console.log('unmount')
            document.body.removeEventListener('click', handleClickOutside);
        }
      }, []);

    return (
        <div className="sort" ref={sortRef}>
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
