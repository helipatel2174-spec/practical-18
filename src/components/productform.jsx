import React, { useEffect, useState } from "react";

function ProductForm({ onAddProduct, editingProduct, onUpdateProduct, onCancel }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(String(editingProduct.price));
      setCategory(editingProduct.category);
    } else {
      setName("");
      setPrice("");
      setCategory("");
    }
  }, [editingProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price || Number(price) <= 0 || !category.trim()) {
      alert("Please enter valid product details");
      return;
    }

    const product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: name.trim(),
      price: Number(price),
      category: category.trim()
    };

    if (editingProduct) {
      onUpdateProduct(product);
    } else {
      onAddProduct(product);
    }

    setName("");
    setPrice("");
    setCategory("");
  };

  const cancelEdit = () => {
    setName("");
    setPrice("");
    setCategory("");
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "Edit Product" : "Add New Product"}</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        min="0.01"
        step="0.01"
        required
      />

      <input
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>

      {editingProduct && (
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default ProductForm;