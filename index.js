const express = require("express");
const app = express();
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
  {useNewUrlParser: true, UseUnifiedTopology: true}, ()=>{
    console.log("connected")
  });



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)




app.listen(7777,()=>{
  console.log("Ready")
})