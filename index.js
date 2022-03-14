const express = require("express");
const app = express();

// ROUTES
const hotelsRoutes = require("./routes/hotelsRoutes");
app.use(express.json());
app.use("/hotels", hotelsRoutes);
app.use("*", (err, req, res) => {
  res.status(404).send("404 error");
});

app.listen(8000, () => {
  console.log("listen port 8000");
});
