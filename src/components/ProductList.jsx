import { Link } from "react-router-dom";
import { products } from "../data";

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/productgggs/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
