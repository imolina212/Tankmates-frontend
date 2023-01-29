import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import QuantityPicker from "./../quantityPicker/QuantityPicker";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CartItem.scss";

function CartItem({ id, image, title, price, quantity = 0 }) {
	const dispatch = useDispatch();

	return (
		<div className="cartItem">
			<>
				<Link to={`/shop/${id}`}>
					<img className="cartItem__image" src={image} alt="item" />
				</Link>
				<div className="cartItem__info">
					<Link to={`/shop/${id}`} className="cartItem__title">
						{title}
					</Link>
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
