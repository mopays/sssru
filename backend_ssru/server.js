const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require("./router/user.router");
const autnRouter = require("./router/auth.router");
const productRouter = require("./router/product.router");
const cartRouter = require("./router/cart.router");
const orderRouter = require("./router/order.router");
const cors = require('cors');


dotenv.config()


const app = express();

app.use((req, res, next) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Max-Age', 3600);

  next();
});
app.use(express.json())
app.use(cors());

mongoose.connect(process.env.SERVER_DB_CON).then(
    () => console.log("DBconnect success")
    ).catch(
        (err) =>{console.log(err)}
    );


app.use("/api/auth", autnRouter)
app.use("/api/cart", cartRouter)
app.use("/api/orders", orderRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)


app.listen(5052 ,() =>{
 console.log("server running" );
})