import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import Button from "./../button/Button";
import "./Total.scss";

function Total() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotal = () => {
		let totalQuantity = 0;
		let totalPrice = 0;
		cart.forEach((item) => {
			totalQuantity += item.quantity;
			totalPrice += item.price * item.quantity;
		});
		return { totalPrice, totalQuantity };
	};

	return (
		<div className="total">
			<h2>ORDER SUMMARY</h2>
			<div>
				<p className="total__p">
					total ({getTotal().totalQuantity} items) :{" "}
					<strong>${getTotal().totalPrice}</strong>
				</p>
			</div>
			<div className="total__buttonStack">
				<Button
					name="Proceed to Checkout"
					variant="primary"
					size="sq medium extend"
					arrow={true}
				/>
				<Button
					name="Clear Cart"
					variant="outline-danger"
					size="sq medium extend"
					onClick={() => dispatch(clearCart())}
				/>
			</div>
		</div>
	);
}

export default Total;
