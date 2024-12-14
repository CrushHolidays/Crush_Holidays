import {Router} from "express"
import { createFeedback,getallFeedback, getallspecificFeedback} from "../controllers/feedback.controller.js"
const router=Router()
router.route("/")

.get(getallFeedback)
router.route("/new")
.post(createFeedback)
router.route("/specific")
    .get(getallspecificFeedback);

export default router