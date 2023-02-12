 
const express = require("express")
const Authmodel = require("../Schema/AuthSchema")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
 

app.get("/" , (req , res) =>{
    res.send("authantication api")
})

//login up start
app.post("/regitration", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Authmodel.findOne({ email })
    const passs = await argon2.verify(user.password, password)
    try {
      if (passs) {
        const token = jwt.sign({ id: user._id, name: user.name, email: user.email, role: user.role },
          "SECRETKEY123",
          {
            expiresIn: "5 mins"
          }
        )
        const refreshToken = jwt.sign({}, "REFRESH", {
          expiresIn: "7 days"
        })
        res.send({ msg: "login sucess", token, refreshToken })
      }
      res.status(401).send("invalid user")
    } catch (e) {
      return res.send(e.message)
    }
  
  
  })
  

app.post("/login", async (req, res) => {
    const { name ,email, password } = req.body;
    const hash = await argon2.hash(password)
    const token = req.headers["authorization"]
    console.log(token , "-------")
    try {
    if(token){
     const user = new Authmodel({ name, email, password: hash })
            await user.save()
            return res.status(201).send("Employee creation success")
      
      }
          return res.status(403).send("You are not allowed")
  
      }catch (e) {
      return res.send(e.message)
    }
   })

module.exports = app;