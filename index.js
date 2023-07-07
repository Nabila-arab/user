import express from "express"
import mongoose from "mongoose"
import User from "./model/ModelUser.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import RouteUser  from "./route/RouteUser.js"
let app = express()

mongoose.connect(`mongodb+srv://nabila:MongoDbAtlas2023!@cluster0.zis9uhe.mongodb.net/`, 
{ useNewUrlParser: true, useUnifiedTopology: true }) 
.then (()=> console.log("connexion a la base de donnée etablis"))
.catch(()=> console.log("connexion a la base de donnée echouee"))


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use ('/user' , RouteUser)
//app.use("/login",RouteUser )




let port=1500
app.listen(port, ()=>console.log(`le serveur tourne bien sur le port ${port}`))