import React from "react";

function ProductList({ products, onEditProduct }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => onEditProduct(product)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;