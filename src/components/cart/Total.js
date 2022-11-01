import './Total.scss'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cartSlice'

function Total() {

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();


  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
  
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
      <div className="total__buttonStack">
        <button
          className="button clearCart"
          onClick={() => dispatch(clearCart())}
        > Clear Cart
        </button>
        <button
          className="button checkout"
        > Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Total