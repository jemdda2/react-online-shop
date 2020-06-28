import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_actions';

function CartPage(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		let cartItems = [];

		console.log("cartData", props.user.useData);
		
		if(props.user.userData && props.user.userData.cart) {
			if(props.user.useData.cart.length > 0) {
				props.user.userData.cart.forEach(item => {
					cartItems.push(item.id);
				});
				dispatch(getCartItems(cartItems, props.user.userData.cart))
			}
		}
	}, [])

	return (
		<div>
			CartPage
		</div>
	)
}

export default CartPage
