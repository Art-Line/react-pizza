import qs from 'qs';
import { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort, { sortList } from '../components/Sort';
import PizzaItem from '../components/PizzaItem/';
import Skeleton from '../components/PizzaItem/Skeleton';
import { SearchContext } from '../App';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filterSlice'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearching = useRef(false);
    const isMounted = useRef(false);
    const { searchValue } = useContext(SearchContext);
    const [pizzasList, setPizzasList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // redux
    const { categoryId, sortActive, currentPage } = useSelector((state) => state.filters);    

    // category
    const isCategory = categoryId ? `&category=${categoryId}` : '';

    // sorting
    const sortDirection = (sortActive.field.charAt(0) === '-') ? 'desc' : 'asc';
    const sortField = ((sortActive.field.charAt(0) === '-')) ? sortActive.field.substring(1) : sortActive.field;
    const isSorting = sortActive ? `&orderby=${sortField}&order=${sortDirection}` : '';

    // search
    const isSearch = searchValue ? `&search=${searchValue}` : '';

    // paginator
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    const fetchPizzas = () => {
        setIsLoading(true);
        axios.get(`https://62c09be2d40d6ec55cd39a5f.mockapi.io/pizzagoods?page=${currentPage}&limit=4${isCategory}${isSorting}${isSearch}`)
            .then(res => {
                setPizzasList(res.data)
                setIsLoading(false);
            });
    }

    // если был уже рендер (тоесть не первый) тогда вшиваем парамерты в адресную строчку
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortActive: sortActive.field,
                categoryId,
                currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;

    }, [isCategory, sortActive, currentPage])

    // если был первый рендер то проверяем url параметры и сохраняем в редакс
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortList.find(obj => obj.field === params.sortActive);
            dispatch(setFilters({
                ...params,
                sort
            }));
            isSearching.current = true;
        }
    }, [])


    useEffect(() => {
        if (!isSearching.current) {
            fetchPizzas()
        }
        isSearching.current = false;
    }, [isCategory, sortActive, isSearch, currentPage]);



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
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </>
    )
}

export default Home;
