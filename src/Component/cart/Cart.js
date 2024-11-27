import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, increaseQuantity, decreaseQuantity } from '../../feature/Cart/Cartslice';
import './Cart.css'; // Import CSS for cart styling

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  // State to track checkout process
  const [checkoutCompleted, setCheckoutCompleted] = useState(false);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item)); // Dispatch action to increase quantity
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item)); // Dispatch action to decrease quantity
  };

  const handleCheckout = () => {
    // Simulate checkout completion
    setCheckoutCompleted(true);
    // Optionally clear the cart after successful checkout
    dispatch(clearCart());
  };

  if (checkoutCompleted) {
    return (
      <div className="thank-you-container">
        <h2>Thank You for Your Purchase!</h2>
        <p>Your order has been successfully placed. You will receive a confirmation email shortly.</p>
        <button onClick={() => window.location.href = '/'} className="btn btn-primary">Go to Home</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Start adding products!</p>
      ) : (
        <>
          <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
          <ul className="cart-items-list">
            {items.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="item-info">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                    </div>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}

export default Cart;




