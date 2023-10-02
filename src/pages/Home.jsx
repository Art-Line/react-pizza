import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaItem from '../components/PizzaItem/';
import Skeleton from '../components/PizzaItem/Skeleton';

function Home() {

	const [pizzasList, setPizzasList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://62c09be2d40d6ec55cd39a5f.mockapi.io/pizzagoods')
			.then(res => res.json())
			.then(data => {
				setPizzasList(data)
				setIsLoading(false);
			});
	}, []);

    return (
        <>
            <div className="meta">
                <Categories />
                <Sort />
            </div>
            <section className="goods">
                <h1>All</h1>
                <div className="pizza-catalog">
                    {isLoading ?
                        [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                        :
                        pizzasList.map((item, index) =>
                            <PizzaItem
                                key={index}
                                title={item.title}
                                imgUrl={item.imageUrl}
                                price={item.price}
                                sizes={item.sizes}
                                types={item.types}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Home;
