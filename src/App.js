import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './scss/style.scss'
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<div className="container">
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/cart' element={<Cart />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
