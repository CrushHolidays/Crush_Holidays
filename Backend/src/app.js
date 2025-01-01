import express from "express"
import cors from "cors"
const app=express()


app.use(cors({
    origin: [
        '*'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Date', 'X-Api-Version']
}));

//common middlewares

app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"1000kb"}))
app.use(express.static("public"))
app.use((err, req, res, next) => {
    console.error("Global Error Handler:", err);
    res.status(500).json({ message: "Unexpected server error" });
});

import healthcheckRouter from "./routes/healthcheck.routes.js"
import userRouter from "./routes/user.routes.js"
import PackageRouter from "./routes/Packages.routes.js"
import InquiryRouter from "./routes/inquiry.routes.js"
import FeedbackRouter from "./routes/feedback.routes.js"
import Iternaryroutes from "./routes/iterneraries.routes.js"

app.use("/api/v1/Packages",PackageRouter)
app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/Inquiry",InquiryRouter)
app.use("/api/v1/Feedback",FeedbackRouter)
app.use("/api/v1/Iternaries",Iternaryroutes)
export {app}
