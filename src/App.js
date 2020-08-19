import React from 'react';
import ProductList from './containers/productList';
import AddProduct from './containers/addProduct';


function App() {
  return (
    <div>
  <ProductList></ProductList>
  <hr></hr>
  <AddProduct></AddProduct>
  </div>
  );
}

export default App;
