import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../feature/Cart/Cartslice';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
