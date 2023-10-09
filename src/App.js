import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/style.scss'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { useState } from 'react';

function App() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<BrowserRouter>
			<div className="wrapper">
				<div className="container">
					<Header searchValue={searchValue} setSearchValue={setSearchValue} />
					<main className="main">
						<Routes>
							<Route path='/' element={<Home searchValue={searchValue} />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</main>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
