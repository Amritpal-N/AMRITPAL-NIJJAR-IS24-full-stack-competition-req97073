import React, { useState } from 'react';

// The ProductForm component is responsible for rendering a form for adding a new product
const ProductForm = ({ onAddProduct }) => {
  // Initialize form fields   
  const [productName, setProductName] = useState('');
  const [scrumMaster, setScrumMaster] = useState('');
  const [productOwner, setProductOwner] = useState('');
  const [developers, setDevelopers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [methodology, setMethodology] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the form to the parent component
    onAddProduct({
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
      <h2>Add New Product</h2>
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

export default ProductForm;