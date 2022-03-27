const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://chariotte:konexio2022@cluster0.6ydzk.mongodb.net/trippy?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"));

// ROUTES
const hotelsRoutes = require("./routes/hotelsRoutes");
const restaurantsRoutes = require("./routes/restaurantsRoutes");
const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env",
});
app.use(express.json());
app.use(cors());
app.use("/hotels", hotelsRoutes);
app.use("/restaurants", restaurantsRoutes);
app.use("*", (req, res) => {
  res.status(404).send("404 error");
});

app.listen(8001, () => {
  console.log("listen port 8001");
});
