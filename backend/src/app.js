import cors from "cors";
import express from "express";
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

// mount product routes
app.use("/api/products", productRoutes);
export default app;