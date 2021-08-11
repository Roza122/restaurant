import express from "express";
import { bookTable } from "../controllers/tables.js";
import isAuth from "./isAuth.js";

const Route = express.Router();

Route.post("/book-table", isAuth, bookTable);

export default Route;
