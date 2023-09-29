import './App.css';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Header from './components/Header';
import PizzaItem from './components/PizzaItem';
import './scss/style.scss'

import pizzas from './pizza.json';

function App() {
	
	return (
		<div className="wrapper">
			<div className="container">
				<Header />
				<div className="meta">
					<Categories />
					<Sort />
				</div>
				<section className="goods">
					<h1>All</h1>
					<div className="pizza-catalog">
						{pizzas.map((item, index) => {
							return (
								<PizzaItem 
									title={item.title}
									imgUrl={item.imageUrl}
									price={item.price}
									sizes={item.sizes}
									types={item.types}
								/>
							)
						})}
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
