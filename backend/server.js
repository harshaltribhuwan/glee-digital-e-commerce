require("dotenv").config({ path: __dirname + "/./../../.env" });
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

// --------------------------deployment------------------------------
const __directory = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__directory, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__directory, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
