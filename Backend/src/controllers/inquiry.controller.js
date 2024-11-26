import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Inquiry } from "../models/Inquiry.models.js";
import { Resend } from "resend";
import { Packages } from "../models/Packages.models.js";
const resend = new Resend(process.env.RESEND_API_KEY);

const newEnquiry = asyncHandler(async (req, res) => {
  const { name, user_name, phone, message } = req.body;

  if (!name || !user_name || !phone || !message) {
    return res.status(400).json(ApiResponse.error("All fields except Discount are required.", 400));
  }
  const packageDoc = await Packages.findOne({ Package_name: name }).select('_id');
  if (!packageDoc) {
    return res.status(400).json(ApiResponse.error("Package not found", 400));
  }
  const packageId = packageDoc._id;
  console.log(packageId)
  // Create a new enquiry
  const enquiry = new Inquiry({
    Package_name: packageId,  
    User_name: user_name,
    Phone_no: phone,
    Inquiry_date: Date.now(),
    Inquiry_Message: message,
  });
  
  try {
    const ownerEmailResponse = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["crushholidays09@gmail.com"],
      subject: "New User Inquiry Details",
      html: `
        <h3>New User Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Thank you!</em></p>
      `,
    });
    console.log("it came till here")
    if (ownerEmailResponse.error) {
      return res.status(500).json(ApiResponse.error("Failed to send email to owner."));
    }

    const response = await enquiry.save();
    return res.status(201).json(ApiResponse.success("Enquiry added successfully.", response));
  } catch (error) {
    
    return res.status(500).json(ApiResponse.error("Failed to add enquiry.", 500));
  }
});
const updateEnquiry = asyncHandler(async (req, res) => {
  const { name, user_name } = req.body;

  // Validate input
  if (!name || !user_name) {
    return res.status(400).json(
      ApiResponse.error("Package name and User_name are required to update enquiry.", 400)
    );
  }

  // Find the package by name
  const packageDoc = await Packages.findOne({ Package_name: name }).select('_id');
  if (!packageDoc) {
    return res.status(400).json(ApiResponse.error("Package not found.", 400));
  }
  const packageId = packageDoc._id;

  try {
    // Update the enquiry status
    const updatedEnquiry = await Inquiry.findOneAndUpdate(
      { Package_name: packageId, User_name: user_name }, // Match by Package ID and User_name
      { Inquiry_Status: "Completed" },                  // Update status to 'Completed'
      { new: true }                                     // Return updated document
    );

    if (updatedEnquiry) {
      return res.status(200).json(
        ApiResponse.success("Enquiry status updated successfully.", updatedEnquiry)
      );
    } else {
      return res.status(404).json(
        ApiResponse.error("Enquiry not found.", 404)
      );
    }
  } catch (error) {
    console.error("Error updating enquiry:", error);
    return res.status(500).json(
      ApiResponse.error("Failed to update enquiry.", 500)
    );
  }
});

const allPendingEnquiries = asyncHandler(async (req, res) => {
  try {
    const pendingEnquiries = await Inquiry.find({Inquiry_Status: "Pending" });

    if (pendingEnquiries.length > 0) {
      return res.status(200).json(ApiResponse.success(pendingEnquiries, 200));
    } else {
      return res.status(404).json(ApiResponse.error("No pending enquiries found.", 404));
    }
  } catch (error) {
    return res.status(500).json(ApiResponse.error("Failed to fetch pending enquiries.", 500));
  }
});

export { newEnquiry, updateEnquiry, allPendingEnquiries };
