import { Router } from "express";
import { AddPackages,GetallPackages } from "../controllers/Packages.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router
  .route("/add-package")
  .post(upload.array("images", 5), AddPackages);
router
.route("/get-packages")
.get(GetallPackages);
export default router;
