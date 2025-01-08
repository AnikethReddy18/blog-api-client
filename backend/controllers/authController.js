import bcrypt from "bcrypt"
import { createNewUser } from "../db/queries.js"

export async function signup(req, res){
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);
    
    await createNewUser(username, password)
    res.redirect("/login")
}