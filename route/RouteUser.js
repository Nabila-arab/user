import express from 'express'
import {Auth, inscription , SeConnecter} from "../controller/ControllerUser.js"
const router = express.Router()




router.post("/signUp" , inscription)
router.post("/login" , SeConnecter)



router.get("/" , Auth ,( req, res) => {res.send('Helloooooo')})
export default router 