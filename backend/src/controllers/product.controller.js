import products from "../models/product.model.js";

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
