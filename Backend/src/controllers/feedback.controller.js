import { Comment } from "../models/feedback.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createFeedback = asyncHandler(async (req, res) => {
    const { Title, rating, content, user_name, email } = req.body;
    console.log("it came till here");

    // Validate request body
    if (!Title || !rating || !content || !user_name || !email) {
        const response = ApiResponse.error("Please fill all the fields", 400);
        return res.status(400).json(response);
    }

    // Create and save new feedback
    const newFeedback = new Comment({
        Title,
        rating,
        content,
        name: user_name,
        email,
    });

    const savedFeedback = await newFeedback.save();

    // Respond with success
    const response = ApiResponse.success("Feedback created successfully", savedFeedback);
    return res.status(201).json(response);
});

const getallFeedback=asyncHandler(async(req,res)=>{
    const feedbacks=await Comment.find().sort({createdAt:-1}).populate('name').populate
    ('email')
    const response=ApiResponse.success("Feedbacks retrieved successfully",feedbacks);
    return res.status(200).json(response);

})

const getallspecificFeedback=asyncHandler(async(req,res)=>{
    
    const feedbacks = await Comment.find({ rating: { $gt: 3 } }).sort({ createdAt: -1 });

       
        const response=ApiResponse.success("Feedbacks retrieved successfully",feedbacks);
    return res.status(200).json(response);

})


export { createFeedback,getallFeedback,getallspecificFeedback};
