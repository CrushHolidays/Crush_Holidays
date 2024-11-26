import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      lowercase: true, 
      trim: true,
      index: true, 
    },
    email: {
      type: String,
      required: true,
      lowercase: true, 
      trim: true,
    },
    phoneNo: {
      type: String, 
      required: true,
      trim: true,
    },
    city: {
      type: String, 
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);


export const User = mongoose.model("User", userSchema);
