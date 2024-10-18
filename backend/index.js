import express from "express";
import dotenv from "dotenv";
import bookroutes from "./src/routes/bookroutes.js";
import userroutes from "./src/routes/userroutes.js";
import connectdb from "./src/config/dbconfig.js";
import cors from "cors";
dotenv.config();
connectdb();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/book", bookroutes);
app.use("/user", userroutes);
const PORT = process.env.PORT || 4000;

//defining routes

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
