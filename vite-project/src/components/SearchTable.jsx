import React, { useState } from "react";

const SearchTable = ({ products, onDelete }) => {
  const [searchTable, setSearchTable] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleDelete = (sku) => {
    onDelete(sku);
    setSearchTable(searchTable.filter((product) => product.sku !== sku));
  };

  const findProduct = () => {
    setSearchTable([]); // Tabort tidigare sök
    const foundProducts = products.filter(
      (element) => element.namn.toLowerCase() === search.toLowerCase()
    );
    if (foundProducts.length > 0) {
      setSearchTable(foundProducts);
    } else {
      alert("Product not found");
    }
  };

  return (
    <>
      <p>Search Product</p>
      <input type="text" onChange={handleSearch} />
      <button onClick={findProduct}>Check</button>
      {searchTable.map((x) => (
        <tr key={x.id}>
          <td>{x.namn}</td>
          <td>{x.beskrivning}</td>
          <td>{x.sku}</td>
          <td>{x.url}</td>
          <td>{x.pris}</td>
          <td>
            <button className="delete-btn" onClick={() => handleDelete(x.sku)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default SearchTable;
