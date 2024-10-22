import express from "express";
import dotenv from "dotenv";
import bookroutes from "./src/routes/bookroutes.js";
import userroutes from "./src/routes/userroutes.js";
import connectdb from "./src/config/dbconfig.js";
import cors from "cors";
dotenv.config();
connectdb();

const app = express();
cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://bookstore-app-frontend-vhum.onrender.com/",
  ],
  credentials: true,
});
app.use(express.json());
app.use("/book", bookroutes);
app.use("/user", userroutes);
const PORT = process.env.PORT || 4000;

//defining routes

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
