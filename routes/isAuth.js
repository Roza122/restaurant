import Users from "../model/users.js";
import Places from "../model/places.js";
import jwt from "jsonwebtoken";
import AsyncHandler from "express-async-handler";

const isAuth = AsyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("PRO")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    let user = await Users.findById(decoded.id);
    if (!user) {
      user = await Places.findById(decoded.id);
    }

    if (user) {
      req.user = user;
      next();
    } else {
      console.log("TOKEN EXPIRED, NO USER FOUND..");
    }
  } else {
    throw new Error("You Have No Token, Please Login..");
  }
});

export const isAdmin = AsyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("PRO")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    let user = await Users.findById(decoded.id);

    if (user && user.isAdmin) {
      req.user = user;
      next();
    } else {
      console.log("TOKEN EXPIRED, NO USER FOUND..");
    }
  } else {
    throw new Error("You Have No Token, Please Login..");
  }
});

export default isAuth;
