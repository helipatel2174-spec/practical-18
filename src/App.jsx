
import React, { useState } from "react";
import ProductForm from "./components/productform.jsx";
import ProductList from "./components/productlist.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      category: "Electronics"
    }
  ]);

  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      product
    ]);
    alert("Product added successfully!");
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === updatedProduct.id
          ? updatedProduct
          : product
      )
    );

    setEditingProduct(null);
    alert("Product updated successfully!");
  };

  const cancelEdit = () => {
    setEditingProduct(null);
  };

  return (
    <div className="container">
      <h1>Product Management System</h1>

      <ProductForm
        onAddProduct={addProduct}
        editingProduct={editingProduct}
        onUpdateProduct={updateProduct}
        onCancel={cancelEdit}
      />

      <ProductList
        products={products}
        onEditProduct={editProduct}
      />
    </div>
  );
}

export default App;