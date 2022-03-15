const express = require("express");
const app = express();

// ROUTES
const hotelsRoutes = require("./routes/hotelsRoutes");
const restaurantsRoutes = require("./routes/restaurantsRoutes");
app.use(express.json());
app.use("/hotels", hotelsRoutes);
app.use("/restaurants", restaurantsRoutes);
app.use("*", (req, res) => {
  res.status(404).send("404 error");
});

app.listen(8000, () => {
  console.log("listen port 8000");
});
