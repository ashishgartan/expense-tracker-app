const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// CRUD
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

// Extra
router.put("/:id/change-password", usersController.changePassword);
router.get("/:id/transactions", usersController.getUserTransactions);

module.exports = router;
