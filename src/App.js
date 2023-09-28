import './App.css';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Header from './components/Header';
import PizzaItem from './components/PizzaItem';
import './scss/style.scss'

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
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
						<PizzaItem />
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
