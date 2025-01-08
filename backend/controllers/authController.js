import bcrypt from "bcrypt"
import { createNewUser, getUser } from "../db/queries.js"

export async function signup(req, res){
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);
    
    await createNewUser(username, password)
    res.redirect("/login")
}

export async function login(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const user = await getUser(username)
    if(!user) return res.sendStatus(401)

    const verified = bcrypt.compareSync(password, user.password)

    if(!verified) return res.send(401);
    
    res.send("Sucess")
}