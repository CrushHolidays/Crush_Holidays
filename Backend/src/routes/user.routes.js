import {Router} from "express"
import {userenquiry,getallusers} from "../controllers/user.controller.js"
const router=Router()

router.route("/")
.post(userenquiry)
.get(getallusers)
export default router