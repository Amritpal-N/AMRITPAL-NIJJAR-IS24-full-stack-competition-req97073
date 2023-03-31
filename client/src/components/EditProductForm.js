import React, { useState } from 'react';

// The EditProductForm component is responsible for rendering a form for editing an existing product
const EditProductForm = ({ editedProduct, onUpdateProduct }) => {

    // Initialize form fields with the edited product's data or empty values if no product is provided
    const productData = editedProduct || {};
    const [productName, setProductName] = useState(productData.productName || '');
    const [scrumMaster, setScrumMaster] = useState(productData.scrumMaster || '');
    const [productOwner, setProductOwner] = useState(productData.productOwner || '');
    const [developers, setDevelopers] = useState(productData.developers ? productData.developers.join(', ') : '');
    const [startDate, setStartDate] = useState(productData.startDate || '');
    const [methodology, setMethodology] = useState(productData.methodology || '');
  
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Update the product by passing the form data to the parent component
    onUpdateProduct({
      id: editedProduct.id,
      productName,
      scrumMaster,
      productOwner,
      developers: developers.split(',').map((dev) => dev.trim()),
      startDate,
      methodology,
    });
  
    // Reset form fields
    setProductName('');
    setScrumMaster('');
    setProductOwner('');
    setDevelopers('');
    setStartDate('');
    setMethodology('');
  };

// Render the form with input fields and submit button
return (
    <form onSubmit={handleSubmit}>
        <h2>Edit Product</h2>
        <label>Product Name:</label>
        <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
        />
        <br />

        <label>Scrum Master:</label>
        <input
            type="text"
            value={scrumMaster}
            onChange={(e) => setScrumMaster(e.target.value)}
            required
        />
        <br />

        <label>Product Owner:</label>
        <input
            type="text"
            value={productOwner}
            onChange={(e) => setProductOwner(e.target.value)}
            required
        />
        <br />

        <label>Developer Names (up to 5, separate by commas):</label>
        <input
            type="text"
            value={developers}
            onChange={(e) => setDevelopers(e.target.value)}
            required
        />
        <br />

        <label>Start Date:</label>
        <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
        />
        <br />

        <label>Methodology (Agile or Waterfall):</label>
        <select
            value={methodology}
            onChange={(e) => setMethodology(e.target.value)}
            required
        >
            <option value="">Select Methodology</option>
            <option value="Agile">Agile</option>
            <option value="Waterfall">Waterfall</option>
        </select>
        <br />

        <button type="submit">Save</button>
    </form>
  );
};

export default EditProductForm;
