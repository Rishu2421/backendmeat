// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMidlleware')
const { getUserOrders, getAllOrders, updateOrderStatus,cancelOrder } = require('../controllers/orderController');

// User routes
router.get('/user/:userId', getUserOrders);

// Admin routes
router.get('/admin', getAllOrders);
router.put('/admin/:orderId', updateOrderStatus);
router.put('/cancel-order/:orderId', userAuthMiddleware, cancelOrder);

module.exports = router;
