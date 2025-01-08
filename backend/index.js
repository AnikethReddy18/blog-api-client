import express from "express"

import router from "./routers/router.js"

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("Hello World!")
})

app.use("/", router.authRouter);

app.listen(PORT, ()=>console.log("Listening on http://localhost:"+PORT))