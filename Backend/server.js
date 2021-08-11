import express from "express";
import dotenv from "dotenv";
import path from "path";
import paginate from "express-paginate";

import foodsRoute from "./routes/foodsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import uploadRoutes from "./routes/uploadImage.js";
import tablesRoute from "./routes/tables.js";
import DashbordRouteData from "./routes/Dashboard.js";
import placesProfile from "./routes/placesPorfile.js";
import adminRoutes from "./routes/admin.js";

import MongoConnect from "./config/db.js";

dotenv.config();
MongoConnect();

const app = express();
app.use(express.json());

// ROUTES
app.use(paginate.middleware(10, 50));
app.use(foodsRoute);
app.use(ordersRoutes);
app.use(uploadRoutes);
app.use(tablesRoute);
app.use(DashbordRouteData);
app.use(placesProfile);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

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

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Is Runing..");
});
