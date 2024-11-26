import express from "express";
import { newEnquiry, updateEnquiry, allPendingEnquiries } from "../controllers/inquiry.controller.js";

const router = express.Router();

// Route to add a new enquiry
router.post("/new", newEnquiry);

// Route to update an enquiry's status
router.put("/update", updateEnquiry);

// Route to get all pending enquiries
router.get("/pending", allPendingEnquiries);

export default router;
