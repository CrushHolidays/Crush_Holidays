import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const InquirySchema = new Schema(
  {
    Package_name: {
      type: Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    User_name: {
      type: String,
      required: true,
    },
    Phone_no: {
      type: String,
      required: true,
    },
    Inquiry_date: {
      type: Date,
      default: Date.now,
    },
    Inquiry_Status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Completed"],
    },
    Inquiry_Message: {
      type: String,
      required: true,
      maxLength: 500,
    },
  },
  { timestamps: true }
);

InquirySchema.plugin(mongooseAggregatePaginate);

export const Inquiry = mongoose.model("Inquiry", InquirySchema);
