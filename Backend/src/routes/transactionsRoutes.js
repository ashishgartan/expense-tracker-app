const express = require("express");
const router = express.Router();
const transactionsController = require("../controllers/transactionsController");

// Base CRUD
router.get("/:userId", transactionsController.getTransactions);
router.get("/summary/:userId", transactionsController.getTransactionSummary);
router.post("/", transactionsController.createTransaction);
router.delete("/:id", transactionsController.deleteTransaction);
router.get("/detail/:id", transactionsController.getTransactionById);
router.put("/:id", transactionsController.updateTransaction);

// Advanced filters
router.get(
  "/category/:categoryName/:userId",
  transactionsController.getTransactionsByCategory
);
router.get(
  "/date-range/:userId",
  transactionsController.getTransactionsByDateRange
);
router.get(
  "/recent/:userId/:limit",
  transactionsController.getRecentTransactions
);
router.get(
  "/summary/:userId/:year/:month",
  transactionsController.getMonthlySummary
);

module.exports = router;
