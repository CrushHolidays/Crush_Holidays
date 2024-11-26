import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const userenquiry = asyncHandler(async (req, res) => {
  const { Name, Phone_no, email, city } = req.body;

  // Validate input
  if (!Name || !Phone_no || !email || !city) {
    return res.status(400).json(ApiResponse.error("All fields are required."));
  }

  // Find or create user
  let user = await User.findOne({ where: { email } });
  if (!user) {
    user = await User.create({ fullname:Name, phoneNo:Phone_no, email, city });
  }

  // Send email to the user

  // Send email to the owner with user details
  try {
    const ownerEmailResponse = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["crushholidays09@gmail.com"], // Owner's email
      subject: "New User Inquiry Details",
      html: `
        <h3>New User Inquiry</h3>
        <p><strong>Name:</strong> ${Name}</p>
        <p><strong>Phone Number:</strong> ${Phone_no}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><em>Thank you!</em></p>
      `,
    });

    if (ownerEmailResponse.error) {
      console.error("Email to owner failed:", ownerEmailResponse.error);
      return res.status(500).json(ApiResponse.error("Failed to send email to owner."));
    }

    // Respond with success
    return res.status(200).json(
      ApiResponse.success("User inquiry processed successfully.", {
        user,
        emailStatus: "Emails sent to  owner.",
      })
    );
  } catch (err) {
    console.error("Error sending email to owner:", err.message);
    return res.status(500).json(ApiResponse.error("Internal server error while sending email to owner."));
  }
});


const getallusers=asyncHandler(async(req,res)=>{
  const users=await User.find({})
  res.status(200).json(users)
})



export { userenquiry,getallusers };
