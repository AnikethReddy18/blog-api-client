import jwt from "jsonwebtoken"

export function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]

        jwt.verify(token, process.env.SECRET_KEY, (err, authData)=>{
            if(err){
                res.sendStatus(403);
            }else{
                req.user = authData
                next()
            }
        })

    }else{
        res.sendStatus(403)
    }
}