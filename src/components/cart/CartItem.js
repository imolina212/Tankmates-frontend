import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import QuantityPicker from "./../quantityPicker/QuantityPicker";
import { MdClear } from "react-icons/md";
import "./CartItem.scss";

function CartItem({ id, image, title, price, quantity = 0 }) {
	const dispatch = useDispatch();

	return (
		<div className="cartItem">
			<>
				<img className="cartItem__image" src={image[0]} alt="item" />
				<div className="cartItem__info">
					<p className="cartItem__title">{title}</p>
					<p className="cartItem__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="cartItem__quantityPicker">
						<QuantityPicker
							label="Qty :"
							quantity={quantity}
							onIncrement={() => dispatch(incrementQuantity(id))}
							onDecrement={() => dispatch(decrementQuantity(id))}
						/>
					</div>
				</div>
			</>
			<MdClear
				className="cartItem__removeButton"
				onClick={() => dispatch(removeItem(id))}
			/>
		</div>
	);
}

export default CartItem;
