import React, {useContext} from 'react';

//context
import CartContext from '../contexts/CartContext';


import { NavLink } from 'react-router-dom';

const Navigation = () => {
	let {cart} = useContext(CartContext);
	cart = Array.from(cart);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
