import express from "express";
import dotenv from "dotenv";
import path from "path";
import paginate from "express-paginate";

import tablesRoute from "./routes/tables.js";
import MongoConnect from "./config/db.js";

dotenv.config();
MongoConnect();

const app = express();
app.use(express.json());

// ROUTES
app.use(tablesRoute);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Is Runing..");
});
