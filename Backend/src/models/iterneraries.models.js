import mongoose, { Schema } from "mongoose";

const ActivitySchema = new Schema({
  activityName: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
});

const LocationSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
});

const PlanSchema = new Schema({
  dayNumber: { type: Number, required: true },
  highlights: { type: String, required: true },
  activities: [ActivitySchema],
  locations: [LocationSchema],
});

const ItinerarySchema = new Schema(
  {
    packageName: {
      type: Schema.Types.ObjectId,
      ref: "Packages",
      required: true,
    },
    plans: [PlanSchema], // Array of embedded Plan objects
  },
  { timestamps: true }
);

export const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
