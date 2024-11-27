import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../feature/Cart/Cartslice';
import './Product.css';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        setError("Error fetching product data.");
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product)); // Dispatch to Redux store
      navigate('/cart'); // Navigate to the Cart page after adding product
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.title}</h1>
          <p className="lead">${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-outline-dark" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;




