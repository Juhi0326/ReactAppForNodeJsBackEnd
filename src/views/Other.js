import React from 'react'
import probaApi from '../services/probaApi';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { toastShow } from '../store/actions'
import DropDown from '../components/dropDown';

export const Other = () => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(undefined)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleProducts();
  }, []);

  useEffect(() => {
    if (error) {
      dispatch(toastShow('Sikertelen API hívás!', 'danger'))
    }
  }, [dispatch, error]);

  const handleDropdown = (product) => {
    setSelectedProduct(product);
    const selectedProductObject = products.filter((item) => { return item.name === product})
    console.log(selectedProductObject);
  };

  const handleProducts = async () => {
    setLoading(true);
    try {
      const result = await probaApi.getProducts();
      setProducts(result.data.products);
    } catch (err) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div>
        {products ? <DropDown data={products ? products : []} onChange={handleDropdown} dropDownTitle={"proba"} /> : <div></div>}
        
        {selectedProduct && <div> <br></br><p>{selectedProduct}</p></div>}

        <h1>Products</h1>
        {loading && <p>Products are loading!</p>}
        {error && <p>{error}</p>}
        <ul>
          {products?.map((product, key) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Other;