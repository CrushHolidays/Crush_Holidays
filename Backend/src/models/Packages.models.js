import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const PackageSchema = new Schema({
  Package_name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Duration: {
    type: String,
    required: true,
  },
  Highlight: {
    type: String,
    required: true,
  },
  Discount: {
    type: Number,
    required: true,
  },
  Image_url: {
    type: [String],  
    required: true,
  },
});
PackageSchema.plugin(mongooseAggregatePaginate);
export const Packages=mongoose.model("Packages", PackageSchema);
