import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/style.scss'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { createContext, useState } from 'react';

export const SearchContext = createContext('qwe');

function App() {
	const [searchValue, setSearchValue] = useState('');
	return (
		<BrowserRouter>
			<SearchContext.Provider value={{searchValue, setSearchValue}}>
				<div className="wrapper">
					<div className="container">
						<Header />
						<main className="main">
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/cart' element={<Cart />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</main>
					</div>
				</div>
			</SearchContext.Provider>
		</BrowserRouter>
	);
}

export default App;
