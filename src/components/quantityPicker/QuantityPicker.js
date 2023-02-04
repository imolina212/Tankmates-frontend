import React, { useRef } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./QuantityPicker.scss";

const QuantityPicker = ({ label, quantity = 1, onIncrement, onDecrement }) => {
	return (
		<div className="qty-picker-container">
			<span className="qty-picker__label">{label}</span>
			<div className="qty-picker">
				<div>
					<button
						className={quantity === 1 ? "not-allowed" : ""}
						onClick={onDecrement}
					>
						<AiOutlineMinus />
					</button>
				</div>
				<div className="qty-picker__qty">{quantity}</div>
				<div>
					<button onClick={onIncrement}>
						<AiOutlinePlus />
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuantityPicker;
