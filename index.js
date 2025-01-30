const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const userModel = require('./usermodel')

app.get('/',(req,res) => {
    res.send("Welcome");
})

app.post("/create",async (req,res) => {
    try{

        const{name,email,role} = req.body;

        if(!name || !email || !role){
            return res.send("Field can not be empty")
        }

        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.send(`${email} Email already in Use!`)
        }

       const createdUser = await userModel.create({name,email,role})

       res.send(createdUser)

    }catch(error){
        console.error(error)
        res.send("Error in Creating User! ")
    }
})

app.get("/read",async(req,res) => {
    try{

        const allUser = await userModel.find();
        res.send(allUser)

    }catch(error){
        console.error(error)
        res.error("Error To get All User Data")
    }
})

app.listen(3000,() => {

    console.log("Server running on http://localhost:3000")

});