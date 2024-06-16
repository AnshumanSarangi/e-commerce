const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server Running in the port ${port}`);
});
