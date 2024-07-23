const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
dotenv.config();
app.use(express.json());
const userRouter = require("../backend/Routers/userRoute");
mongoose.connect(process.env.URI).
then(()=>{   
    app.listen(process.env.PORT || 8000,(err)=>{
        if(err) console.log(err);
        console.log("connected sucessfully at",process.env.PORT);
    });
})
app.use(userRouter);