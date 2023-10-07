const express = require("express");
const morgan = require("morgan");
const { connect , sync } = require('./config/database')

const productRoutes = require("./routes/products");

const app = express();

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

// Setting up middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

// Setting up routes
app.use('/products', productRoutes);


// Creating a server
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
