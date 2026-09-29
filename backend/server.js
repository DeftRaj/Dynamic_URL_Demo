import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();
const PORT = Number(process.env.PORT) || 6000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
