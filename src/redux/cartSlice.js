import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const newCart = [];

			for (const item of state.cart) {
				newCart.push({ ...item });
			}

			const itemInCart = newCart.find(
				(item) => item.title === action.payload.title
			);
			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				newCart.push({ ...action.payload, quantity: 1 });
			}
			return { ...state, cart: newCart };
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			item.quantity++;
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find((item) => item.id === action.payload);
			if (item.quantity === 1) {
				item.quantity = 1;
			} else {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload
			);
			state.cart = removeItem;
		},
		clearCart: (state, action) => {
			const newCart = [];
			return { ...state, cart: newCart };
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const {
	addToCart,
	incrementQuantity,
	decrementQuantity,
	removeItem,
	clearCart,
} = cartSlice.actions;
