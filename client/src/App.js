import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import EditProductForm from './components/EditProductForm';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// The main App component, which contains the application logic and renders other components
function App() {
  // State the variables for products, edited product, search terms, error message, and search type
  const [products, setProducts] = useState([]);
  const [editedProduct, setEditedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [developerSearchTerm, setDeveloperSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const [searchType, setSearchType] = useState('');

  // Fetch products from API and set products state on component mount
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Received data:', data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Generate a unique ID for a new product
  const idExists = (id) =>{
    return products.some((product) => product.id === id);
  };

  const uniqueId = () => {
    let id
    do {
      id = uuidv4();
    }
    while (idExists(id));
    return id;
  };
  
  // Validate the number of developers for a product
  const validateNumberOfDevelopers = (developers) => {
    if (developers.length > 5) {
      setErrorMessage('A maximum of 5 developers is allowed.');
      return false;
    }
    setErrorMessage('');
    return true;
  };  

  // Handle adding a new product
  const handleAddProduct = (product) => {
    const newProduct = { ...product, id: uniqueId() };
    if (!validateNumberOfDevelopers(product.developers)) {
      return;
    }

    fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((addedProduct) => {
        setProducts([...products, addedProduct]);
      });
  };

  // Handle editing an existing product
  const handleEditProduct = (product) => {
    setEditedProduct({
      id: product.id, 
      productName: product.productName,
      scrumMaster: product.scrumMaster,
      productOwner: product.productOwner,
      developers: product.developers,
      startDate: product.startDate,
      methodology: product.methodology,
    });
  };

  // Handle updating an existing product
  const handleUpdateProduct = (updatedProduct) => {
    fetch(`http://localhost:3000/api/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((savedProduct) => {
        const updatedProducts = products.map((product) =>
          product.id === savedProduct.id ? savedProduct : product
        );
        setProducts(updatedProducts);
        setEditedProduct(null);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  // Handle search for Scrum Masters
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    //setSearchType('scrumMaster');
  };

  // Handle search for Developers
  const handleDeveloperSearch = (e) => {
    setDeveloperSearchTerm(e.target.value);
    //setSearchType('developer');
  };

  //Filter products based on the search terms
  const scrumMasterFilteredProducts = products.filter((product) =>
  product.scrumMaster.toLowerCase().includes(searchTerm.toLowerCase())
);

const developerFilteredProducts = products.filter((product) =>
  product.developers.some((developer) =>
    developer.toLowerCase().includes(developerSearchTerm.toLowerCase())
  )
);

  const filteredProducts =
  searchTerm && developerSearchTerm
    ? products.filter(
        (product) =>
          product.scrumMaster.toLowerCase().includes(searchTerm.toLowerCase()) &&
          product.developers.some((developer) =>
            developer.toLowerCase().includes(developerSearchTerm.toLowerCase())
          )
      )
    : searchTerm
    ? scrumMasterFilteredProducts
    : developerSearchTerm
    ? developerFilteredProducts
    : products;

    // Render the application with the main components
    return (
      <div className="App">
        <h1>BC Province Web Applications</h1>
        <input
          type="text"
          placeholder="Search by Scrum Master"
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && <div className="count-display">Scrum Masters found: {scrumMasterFilteredProducts.length}</div>}
        <input
          type="text"
          placeholder="Search by Developer"
          value={developerSearchTerm}
          onChange={handleDeveloperSearch}
        />
        {developerSearchTerm && <div className="count-display">Developers found: {developerFilteredProducts.length}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <ProductTable products={filteredProducts} onEditProduct={handleEditProduct} />
        <ProductForm onAddProduct={handleAddProduct} />
        {editedProduct && (
          <EditProductForm
            editedProduct={editedProduct}
            onUpdateProduct={handleUpdateProduct}
          />
        )}
      </div>
    );
  }
  
  export default App;
  