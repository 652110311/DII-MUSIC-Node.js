const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./controller/products");
const userRoutes = require(".//controller/users");
const cartRoutes = require("./controller/carts");
const addressRoutes = require("./controller/address");
const orderRoutes = require("./controller/orders");
const summaryRoutes = require("./controller/summary");
const { connect, sync } = require("./config/database");

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["PUT", "DELETE", "POST"], // Allow PUT and DELETE methods
};

app.use(cors(corsOptions));

// Setting up routes
app.use("/summary", summaryRoutes);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/carts", cartRoutes);
app.use("/address", addressRoutes);
app.use("/orders", orderRoutes);

// Creating a server
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
