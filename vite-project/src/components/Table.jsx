import React from "react";
import "./Table.css";

const Table = ({ products, onDelete }) => (
  <table>
    <thead>
      <tr>
        <th>Märke</th>
        <th>Beskrivning</th>
        <th>Regnr</th>
        <th>URL</th>
        <th>Pris</th>
      </tr>
    </thead>
    <tbody>
      {products.map((products) => (
        <tr key={products.id}>
          <td>{products.namn}</td>
          <td>{products.beskrivning}</td>
          <td>{products.sku}</td>
          <td>{products.imgUrl}</td>
          <td>{products.pris}</td>
          <td>
            <button
              className="delete-btn"
              onClick={() => onDelete(products.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
