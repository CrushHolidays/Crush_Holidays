import express from "express"
import cors from "cors"
const app=express()


app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true
    })
)
//common middlewares
app.use(express.json({limit:"1000kb"}))
app.use(express.urlencoded({extended:true,limit:"1000kb"}))
app.use(express.static("public"))

import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
import PackageRouter from "./routes/Packages.routes.js"
import InquiryRouter from "./routes/inquiry.routes.js"
import FeedbackRouter from "./routes/feedback.routes.js"
app.use("/api/v1/Packages",PackageRouter)
app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/Inquiry",InquiryRouter)
app.use("/api/v1/Feedback",FeedbackRouter)

export {app}