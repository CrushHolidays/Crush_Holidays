import {Router} from "express"
import { createFeedback,getallFeedback} from "../controllers/feedback.controller.js"
const router=Router()
router.route("/")
.get(getallFeedback)
router.route("/new")
.post(createFeedback)

export default router