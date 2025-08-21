// controllers/authController.js

// Register new user
exports.register = (req, res) => {
  console.log(req.body);
  res.send("✅ User registered successfully");
};

// Login user
exports.login = (req, res) => {
  console.log(req.body);
  res.send("✅ User logged in successfully");
};

// Logout user
exports.logout = (req, res) => {
  res.send("✅ User logged out successfully");
};

// Forgot password
exports.forgotPassword = (req, res) => {
  console.log(req.body.email);
  res.send("📩 Password reset link sent to email");
};

// Reset password
exports.resetPassword = (req, res) => {
  console.log(req.body);
  res.send("🔑 Password has been reset");
};

// Refresh JWT token
exports.refreshToken = (req, res) => {
  res.send("🔄 New token generated");
};
