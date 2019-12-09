import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//Contexts

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart,item])

	};
	const removeItem = items => {
		const newCart = cart.filter(item =>{
			if (item.id !== items){
				return item;
			}
		});
		return setCart(newCart);
	}


	const Provider = ProductContext.Provider;
	const CartProvider = CartContext.Provider;

	return (
		<div className="App">
			<Provider value={{products, addItem}}>
				<CartProvider value={{cart,removeItem}}>
			<Navigation />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart/>}
			/>
			</CartProvider>
		</Provider>
		</div>
	);
}

export default App;
