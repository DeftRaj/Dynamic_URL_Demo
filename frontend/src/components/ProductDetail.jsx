import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../services/getdata";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct).catch(console.error);
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
