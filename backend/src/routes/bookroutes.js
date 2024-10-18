import express from "express";
import { getBook } from "../controllers/bookcontroller.js";

const router = express.Router();
router.get("/", getBook);

export default router;
