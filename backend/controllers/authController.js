import bcrypt from "bcrypt"

export async function signup(req, res){
    const username = req.body.username;
    const password = await bcrypt.hash(req.body.password, 10);
    
    console.log(username + " " + password)
    res.redirect("/login")
}