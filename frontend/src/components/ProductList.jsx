import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/getdata";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);
  console.log("Data received in component:", products)
  return (
    <div className="container">
      <h2>Product List</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
