// controllers/transactionsController.js

// GET all transactions
exports.getTransactions = (req, res) => {
  const { userId } = req.params;
  res.send(`Sending all transactions for user ${userId}`);
};

// GET transaction summary
exports.getTransactionSummary = (req, res) => {
  const { userId } = req.params;
  res.send(`Sending transaction summary for user ${userId}`);
};

// POST create new transaction
exports.createTransaction = (req, res) => {
  console.log(req.body);
  res.send("Transaction created successfully");
};

// DELETE transaction
exports.deleteTransaction = (req, res) => {
  const { id } = req.params;
  res.send(`Transaction ${id} deleted`);
};

// GET single transaction detail
exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  res.send(`Transaction details for ID: ${id}`);
};

// PUT update transaction
exports.updateTransaction = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send(`Transaction ${id} updated`);
};

// GET transactions by category
exports.getTransactionsByCategory = (req, res) => {
  const { categoryName, userId } = req.params;
  res.send(`Transactions for user ${userId} in category ${categoryName}`);
};

// GET transactions by date range
exports.getTransactionsByDateRange = (req, res) => {
  const { userId } = req.params;
  const { start, end } = req.query;
  res.send(`Transactions for user ${userId} between ${start} and ${end}`);
};

// GET recent N transactions
exports.getRecentTransactions = (req, res) => {
  const { userId, limit } = req.params;
  res.send(`Last ${limit} transactions for user ${userId}`);
};

// GET monthly/yearly summary
exports.getMonthlySummary = (req, res) => {
  const { userId, year, month } = req.params;
  res.send(`Summary for user ${userId} in ${month}/${year}`);
};
