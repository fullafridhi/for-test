const express = require("express");
const {
    signup,
    login,
    logout,
    forgetPassword,
    resetPassword,
    resendOTP,
    verifyAccount,
    getProduct,
    createOrder,
    getUserOrders,
} = require("../controllers/userControllers");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

// Define routes
router.post("/signup", signup);
router.post("/verify", isAuthenticated, verifyAccount);
router.post("/resend-otp", isAuthenticated, resendOTP);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.get("/products", getProduct);
router.post("/create-order", isAuthenticated, createOrder);
router.get("/user-orders", isAuthenticated, getUserOrders);

module.exports = router;
