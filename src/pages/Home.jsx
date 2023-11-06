import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem/';
import Skeleton from '../components/PizzaItem/Skeleton';
import { SearchContext } from '../App';
import { setCategoryId } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux';

function Home() {

    const dispatch = useDispatch();
    const { searchValue } = useContext(SearchContext);
    const [pizzasList, setPizzasList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const categoryId = useSelector((state) => state.filters.categoryId);
    // const sortActive = useSelector(state => state.filters.sortActive);
    const {categoryId, sortActive} = useSelector((state) => state.filters);    // redux

    // category
    const isCategory = categoryId ? `category=${categoryId}` : '';

    // sorting
    const sortDirection = (sortActive.field.charAt(0) === '-') ? 'desc' : 'asc';
    const sortField = ((sortActive.field.charAt(0) === '-')) ? sortActive.field.substring(1) : sortActive.field;
    const isSorting = sortActive ? `&orderby=${sortField}&order=${sortDirection}` : '';

    // search
    const isSearch = searchValue ? `&search=${searchValue}` : '';

    useEffect(() => {
        axios.get(`https://62c09be2d40d6ec55cd39a5f.mockapi.io/pizzagoods?${isCategory}${isSorting}${isSearch}`)
            .then(res => {
                setPizzasList(res.data)
                setIsLoading(false);
            });
    }, [isCategory, isSorting, isSearch]);

    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    const pizzas = pizzasList.map((item, index) =>
        <PizzaItem
            key={index}
            title={item.title}
            imgUrl={item.imageUrl}
            price={item.price}
            sizes={item.sizes}
            types={item.types}
        />
    )

    return (
        <>
            <div className="meta">
                <Categories
                    categoryId={categoryId}
                    onChangeCategory={(id) => dispatch(setCategoryId(id))} // to redux
                />``
                <Sort />
            </div>
            <section className="goods">
                <h1>{searchValue ? `Search: ${searchValue}` : 'All'}</h1>
                <div className="pizza-catalog">
                    {isLoading ? skeleton : pizzas}
                </div>
            </section>
        </>
    )
}

export default Home;
