var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

var transactionsRoutes = require("./routes/transactionsRoutes");
var usersRoutes = require("./routes/usersRoutes");
var authRoutes = require("./routes/authRoutes");

var app = express();
const PORT = process.env.PORT || 8080;

// Connect to DB
const connectDB = require("./config/db");
connectDB();

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/auth", authRoutes); // 🔑 Auth routes
app.use("/api/users", usersRoutes); // 👤 User routes
app.use("/api/transactions", transactionsRoutes); // 💸 Transaction routes
app.get("/api/sample", (req, res) => {
  res.json({ message: "Hello" });
});
// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
