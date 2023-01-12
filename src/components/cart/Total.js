import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import Button from "./../button/Button";
import { TbTruckDelivery } from "react-icons/tb";
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
		totalPrice = totalPrice.toFixed(2);
		return { totalPrice, totalQuantity };
	};

	return (
		<div className="total">
			<div className="total__item">
				<p className="total__p">Cart total</p>
				<p>${getTotal().totalPrice}</p>
			</div>
			<div className="total__item">
				<p className="total__p">Savings</p>
				<p>$0.00</p>
			</div>
			<div className="total__item">
				<p className="total__p">Sub-total</p>
				<p>${getTotal().totalPrice}</p>
			</div>
			<div className="total__item">
				<p className="total__p">Shipping</p>
				<p>{getTotal().totalPrice > 79.99 ? "Free" : "$5.99"}</p>
			</div>
			<div className="total__item">
				<p className="total__item__total">Total</p>
				<p className="total__item__total zoomed">
					$
					{getTotal().totalPrice > 79.99
						? getTotal().totalPrice
						: Number(getTotal().totalPrice) + 5.99}
				</p>
			</div>
			{getTotal().totalPrice < 79.99 ? (
				<div className="total__item">
					<div className="shipping-icon">
						<TbTruckDelivery size={20} />
					</div>
					${(79.99 - getTotal().totalPrice).toFixed(2)} until
					<span style={{ color: "green", fontWeight: "bold" }}>
						FREE
					</span>
					shipping. Save $4.99.
				</div>
			) : (
				<div className="shipping-msg">
					<span>
						<TbTruckDelivery className="shipping-icon" size={20} />
					</span>
					<p>
						You get{" "}
						<span style={{ color: "green", fontWeight: "bold" }}>
							FREE
						</span>{" "}
						shipping!
					</p>
				</div>
			)}
			<div className="total__buttonStack">
				<Button
					name={
						getTotal().totalPrice > 79.99
							? "Checkout - $" + getTotal().totalPrice
							: "Checkout - $" +
							  (Number(getTotal().totalPrice) + 5.99)
					}
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
