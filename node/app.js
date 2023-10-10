const express = require("express");
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users')
const cartRoutes = require('./routes/cart')
const addressRoutes = require('./routes/address')
const { connect , sync } = require('./config/database')

// Setting up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();

app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['PUT', 'DELETE'], // Allow PUT and DELETE methods
};

app.use(cors(corsOptions));

// Setting up routes
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/address', addressRoutes);

// Creating a server
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
