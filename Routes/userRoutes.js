import express from "express";
const router = express.Router();
import UserController from "../Controller/UserController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

// Public Routes
router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);

// Route Level Middleware - To Protect Route
router.use('/userlist', checkUserAuth)

// Protected Routes
router.get('/userlist', UserController.getUserList)

export default router;
