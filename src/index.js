require("dotenv").config();

const express = require("express");
const cors = require("cors");
 
// const userRouter=require("./Routes/user.routes") 
const connect = require("./Config/db")
const PORT = process.env.PORT || 3000
const ProductsRoute = require("./Routes/ProductRoutes")
const AuthRoutes = require("./Routes/AuthRoutes")
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/posts", ProductsRoute );
 app.get("/allusers" , AuthRoutes.GetAllUser)
  app.post("/signup",AuthRoutes.Signup)
  app.post("/login",AuthRoutes.Login) 

app.listen(PORT,() => {
    try{
        connect();
        console.log(`listning to http://localhost:${PORT}`)
    }catch(err){
        console.log(err);
    }
})
 


// const express = require("express")
// const mongoose = require("mongoose");
// const Connection = require("./Config/db");
 
// mongoose.set("strictQuery", false);
// const app = express() 
// const PORT = process.env.PORT || 5001
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
 

 

// app.get("/posts",(req , res) =>{
//     res.send("hello world, my first responce")
// })
 
// app.listen(PORT , async() => {
//   await Connection()
//   console.log(`listning to http://localhost:${PORT}`)
// })

 
// //connecting to mongodb
// // const connctionUrl =  "mongodb+srv://pravin:pravin1234@cluster0.qg419fw.mongodb.net/?retryWrites=true&w=majority"
// // mongoose.connect(connctionUrl , {
// //     useNewUrlParser: true
// // }).then(()=>{
// //     app.listen(PORT , ()=>{
// //         console.log(`db connected successfully http://localhost:${PORT}`)
// //     })
// // }).catch((err) => console.log("db connection failure",err))