import React from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./QuantityPicker.scss";

const QuantityPicker = ({ label, quantity = 1, onIncrement, onDecrement }) => {
	return (
		<div className="qty-picker-container">
			<span>{label}</span>
			<div className="qty-picker">
				<button onClick={onDecrement}>
					<AiOutlineMinus />
				</button>
				<input type="number" value={quantity} />
				<button onClick={onIncrement}>
					<AiOutlinePlus />
				</button>
			</div>
		</div>
	);
};

export default QuantityPicker;
