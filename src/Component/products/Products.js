import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import './Products.css'; 

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [category, setCategory] = useState('all'); 

    useEffect(() => {
        let isMounted = true;

        const getProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                if (isMounted) {
                    setProducts(response.data);
                    setFilteredProducts(response.data); 
                }
            } catch (error) {
                if (isMounted) {
                    setError("Error fetching data.");
                    console.error("Error fetching data:", error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        getProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.category === category));
        }
    }, [category, products]);

    const Loading = () => (
        <div className="row">
            {[...Array(9)].map((_, index) => (
                <div key={index} className="col-md-4 col-sm-6 mb-4">
                    <div className="card h-100 text-center p-4">
                        <Skeleton height={250} />
                        <div className="card-body">
                            <Skeleton count={1} height={20} width={150} />
                            <Skeleton count={1} height={20} width={100} />
                            <Skeleton count={1} height={30} width={120} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const ShowProducts = () => (
        <>
            <div className="buttons mb-5 pb-5 d-flex justify-content-center flex-wrap">
                <button className="btn btn-outline-dark btn-filter" onClick={() => setCategory('all')}>All</button>
                <button className="btn btn-outline-dark btn-filter" onClick={() => setCategory('men\'s clothing')}>Men's Collection</button>
                <button className="btn btn-outline-dark btn-filter" onClick={() => setCategory('women\'s clothing')}>Women's Collection</button>
                <button className="btn btn-outline-dark btn-filter" onClick={() => setCategory('jewelery')}>Jewelery</button>
                <button className="btn btn-outline-dark btn-filter" onClick={() => setCategory('electronics')}>Electronics</button>
            </div>
            <div className="row">
                {filteredProducts.map(product => (
                    <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                <p className="card-text lead fw-bold">${product.price}</p>
                                <a href={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                {loading ? <Loading /> : error ? <div className="error">{error}</div> : <ShowProducts />}
            </div>
        </div>
    );
}

export default Products;
