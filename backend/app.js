const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const blogRoutes = require("./routes/blogs");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Backend API is running...");
});

// Blog routes
app.use("/blogs", blogRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
