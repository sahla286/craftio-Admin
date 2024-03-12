import React, { useState } from "react";
// import "./UpdateProductModal.css";

const UpdateProductModal = ({ product, updateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(updatedProduct);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={updatedProduct.image}
            onChange={handleChange}
          />
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={updatedProduct.category}
            onChange={handleChange}
          />
          <label>Old Price:</label>
          <input
            type="number"
            name="old_price"
            value={updatedProduct.old_price}
            onChange={handleChange}
          />
          <label>New Price:</label>
          <input
            type="number"
            name="new_price"
            value={updatedProduct.new_price}
            onChange={handleChange}
          />
          <label>Description:</label>
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Update</button>
          
        </form>
      </div>
    </div>
  );
};

export default UpdateProductModal;
