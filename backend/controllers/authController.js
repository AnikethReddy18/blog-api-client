import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createNewUser, getUser } from "../db/queries.js"
import { body, validationResult } from "express-validator";

export const signupValidators = [
    body("username").isLength({min: 4}).withMessage("Username should have atleast 4 characters"),
    body("password").isLength({min: 8}).withMessage("Passoword should have atleast 8 characters")
]
export async function signup(req, res){
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()})
    }

    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);
    
    await createNewUser(username, password)
    res.sendStatus(200)
}

export async function login(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await getUser(username)
    if(!user) return res.sendStatus(401)

    const verified = bcrypt.compareSync(password, user.password)

    if(!verified) return res.send(401);
    
    jwt.sign(user, process.env.SECRET_KEY, (err, token)=>{
        res.json({token})
    })
}