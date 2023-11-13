import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import Login from "./components/Login";
import SearchTable from "./components/SearchTable";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTable, setSearchTable] = useState([]);
  const [search, setSearch] = useState("");
  const [login, setLogin] = useState(true);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch("https://localhost:7000/product")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  const onSearch = () => {
    fetch(`https://localhost:7000/product?name=${search}`, {
      method: "get",
    })
      .then((resp) => resp.json())
      .then((products) => {
        setSearchTable(products);
        if (products.length === 0) {
          alert("No products found");
        }
      })
      .catch((error) => {
        console.error("Error fetching products by name:", error);
      });
  };

  const onAdd = (newProduct) => {
    const isProductExisting = products.some(
      (product) => product.sku === newProduct.sku
    );
    if (!isProductExisting) {
      fetch("https://localhost:7000/product", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((resp) => resp.json())
        .then((product) => setProducts([...products, product]))
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    } else {
      alert("Regnummer finns redan.");
    }
  };

  const onDelete = (sku) => {
    fetch(`https://localhost:7000/product/${sku}`, {
      method: "delete",
    }).then(() => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.sku !== sku)
      );
    });
  };

  const searchxTable = searchTable.map((x) => (
    <p key={x.id}>
      {x.namn} {x.beskrivning} {x.sku} {x.url} {x.pris}
    </p>
  ));

  return (
    <div className="app">
      {login ? (
        <div>
          <h2>PRODUCT MANAGER</h2>
          <div className="api-container">
            <div className="search-container">
              <SearchTable products={products} onDelete={onDelete} />
              <div className="search-result">{searchxTable}</div>
            </div>
            <Form onAdd={onAdd} />
            <Table products={products} onDelete={onDelete} />
          </div>{" "}
        </div>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
