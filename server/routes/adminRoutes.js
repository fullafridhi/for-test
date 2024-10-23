const express = require("express");
const {
    addProduct,
    updateProduct,
    deleteProduct,
    getOrders,
} = require("../controllers/adminControllers");
const { adminMiddleware } = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/addproduct", adminMiddleware, addProduct);
router.put("/updateproduct/:id", adminMiddleware, updateProduct);
router.delete("/deleteproduct/:id", adminMiddleware, deleteProduct);
router.get("/getorders", adminMiddleware, getOrders);

module.exports = router;
