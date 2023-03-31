import React from 'react';
import './ProductTable.css';

// The ProductTable component is responsible for rendering a table with the list of products
const ProductTable = ({ products, onEditProduct }) => {
    return (
      <table>
        {/* Table Header */}
        <thead>
          <tr>
            <th>Product Number</th>
            <th>Product Name</th>
            <th>Scrum Master</th>
            <th>Product Owner</th>
            <th>Developers</th>
            <th>Start Date</th>
            <th>Methodology</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
            {/* Iterate over the list of products and create a table row for each product */}
          {products && products.map((product) => (
            <tr key={product.id}>
              {/* Product Number */}
              <td>{product.id}</td>

              {/* Product Name */}
              <td>{product.productName}</td>

              {/* Scrum Master */}
              <td>{product.scrumMaster}</td>

              {/* Product Owner */}
              <td>{product.productOwner}</td>

              {/* Developers */}
              <td>
                {/* Iterate over the list of developers and create a div for each developer */}
                {product.developers && product.developers.map((developer, index) => (
                  <div key={`${developer}-${index}`}>{developer}</div>
                ))}
              </td>

              {/* Start Date */}
              <td>{product.startDate}</td>

              {/* Methodology */}
              <td>{product.methodology}</td>

              {/* Edit button */}
              <td>
                <button onClick={() => onEditProduct(product)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  

export default ProductTable;