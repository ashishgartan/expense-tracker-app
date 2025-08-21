// controllers/usersController.js

// Get all users
exports.getAllUsers = (req, res) => {
  res.send("Sending all users");
};

// Get single user profile
exports.getUserById = (req, res) => {
  const { id } = req.params;
  res.send(`Profile details of user ${id}`);
};

// Update user profile
exports.updateUser = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send(`User ${id} updated`);
};

// Delete user account
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  res.send(`User ${id} deleted`);
};

// Change user password
exports.changePassword = (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  res.send(`Password changed for user ${id}`);
};

// Get user transactions (integration with transactions)
exports.getUserTransactions = (req, res) => {
  const { id } = req.params;
  res.send(`Transactions for user ${id}`);
};
