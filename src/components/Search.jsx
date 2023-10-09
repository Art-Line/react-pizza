import { ReactComponent as IcoSearch } from '../img/search.svg';
import { ReactComponent as IcoClose } from '../img/close.svg';

function Search({searchValue, setSearchValue}) {
    return (
        <div className="header__search">
            <IcoSearch />
            <input className="header__search-input" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            {searchValue &&
                <button className="header__search-clear" type="button" onClick={() => setSearchValue('')}>
                    <IcoClose />
                </button>
            }
        </div>
    )
}

export default Search;
