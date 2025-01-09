import express from "express"

import router from "./routers/router.js"

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({ extended: true }));

app.use("/", router.authRouter);
app.use("/", router.homeRouter)

app.listen(PORT, ()=>console.log("Listening on http://localhost:"+PORT))