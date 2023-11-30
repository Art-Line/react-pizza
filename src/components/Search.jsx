import { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../App';
import debounce from 'lodash.debounce';
import { ReactComponent as IcoSearch } from '../img/search.svg';
import { ReactComponent as IcoClose } from '../img/close.svg';

function Search() {
    const [value, setValue] = useState('');
    const {setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();


    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1000),
        [],
    );

    const onClickClear = () => {
        setValue('');                    // clear search input
        inputRef.current.focus();       // add focus after clear
        setSearchValue('');
    }

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    return (
        <div className="header__search">
            <IcoSearch />
            <input
                type="text"
                className="header__search-input"
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
            />
            {value &&
                <button
                    type="button"
                    className="header__search-clear"
                    onClick={onClickClear}
                >
                    <IcoClose />
                </button>
            }
        </div>
    )
}

export default Search;
