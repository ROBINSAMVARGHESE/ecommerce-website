import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart, increaseQuantity, decreaseQuantity, addToCart } from '../../feature/Cart/Cartslice';
import axios from 'axios';
import './Cart.css'; // Import CSS for cart styling

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const [checkoutCompleted, setCheckoutCompleted] = useState(false);
  const [loading, setLoading] = useState(false); // For loading state during checkout
  const [selectedProduct, setSelectedProduct] = useState(null); // For selecting new products to add
  const [products, setProducts] = useState([]); // To store fetched products
  const [loadingProducts, setLoadingProducts] = useState(true); // To show loading while fetching products

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

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

  const handleAddMore = (item) => {
    handleIncreaseQuantity(item);
  };

  const handleAddNewProduct = () => {
    if (selectedProduct) {
      const newProduct = {
        id: selectedProduct.id,
        title: selectedProduct.title,
        price: selectedProduct.price,
        quantity: 1,
        image: selectedProduct.image,
      };
      dispatch(addToCart(newProduct));
    }
  };

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      setCheckoutCompleted(true);
      dispatch(clearCart()); // Clear cart after successful checkout
      setLoading(false);
    }, 2000);
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
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="cart-item">
                  <td>
                    <div className="item-details">
                      <img src={item.image} alt={item.title} className="item-image" />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleDecreaseQuantity(item)} 
                        disabled={item.quantity === 1} 
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => handleIncreaseQuantity(item)} 
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemoveFromCart(item)} 
                      title="Remove this item"
                    >
                      ❌
                    </button>
                    <button 
                      className="add-more-btn" 
                      onClick={() => handleAddMore(item)} 
                      title="Add more of this product"
                    >
                      ➕ Add More
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${total}</h3>
          <button 
            className="checkout-btn" 
            onClick={handleCheckout} 
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </>
      )}

      {/* Section to Add a New Product */}
      <div className="add-new-product">
        <h3>Add a New Product</h3>
        {loadingProducts ? (
          <p>Loading products...</p>
        ) : (
          <select
            onChange={(e) => {
              const product = products.find(p => p.id === parseInt(e.target.value));
              setSelectedProduct(product);
            }}
          >
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        )}
        <button 
          className="add-to-cart-btn"
          onClick={handleAddNewProduct}
          disabled={!selectedProduct}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;




