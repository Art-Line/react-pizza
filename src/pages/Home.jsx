import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem/';
import Skeleton from '../components/PizzaItem/Skeleton';

function Home({ searchValue }) {

    const [pizzasList, setPizzasList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    // category
    const [categoryId, setCategoryId] = useState(0);  // category ID
    const isCategory = categoryId ? `category=${categoryId}` : '';


    // sorting
    const [sortActive, setSortActive] = useState({
        name: 'popularity A-Z',
        field: 'raiting'
    });  // sort ID
    const sortDirection = (sortActive.field.charAt(0) === '-') ? 'desc' : 'asc';
    const sortField = ((sortActive.field.charAt(0) === '-')) ? sortActive.field.substring(1) : sortActive.field;
    const isSorting = sortActive ? `&orderby=${sortField}&order=${sortDirection}` : '';


    // search
    const isSearch = searchValue ? `&search=${searchValue}` : '';



    useEffect(() => {
        fetch(`https://62c09be2d40d6ec55cd39a5f.mockapi.io/pizzagoods?${isCategory}${isSorting}${isSearch}`)
            .then(res => res.json())
            .then(data => {
                setPizzasList(data)
                setIsLoading(false);
            });
    }, [isCategory, isSorting, isSearch]);

    const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    const pizzas = pizzasList
        // .filter(item => {
        //     if (item.title.toLowerCase().includes(searchValue)) {
        //         return true;
        //     }
        //     return false;
        // })
        .map((item, index) =>
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
                    onChangeCategory={(id) => setCategoryId(id)}
                />
                <Sort
                    sortActive={sortActive}
                    onChangeSort={(id) => setSortActive(id)}
                />
            </div>
            <section className="goods">
                <h1>All</h1>
                <div className="pizza-catalog">
                    {isLoading ? skeleton : pizzas}
                </div>
            </section>
        </>
    )
}

export default Home;
