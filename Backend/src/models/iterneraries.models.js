import mongoose, { Schema } from "mongoose";

const ItinerarySchema = new Schema({
  packageName: {
    type: Schema.Types.ObjectId,
    ref: 'Packages',
    required: true
  },
  dayNumber: {
    type: Number,
    required: true
  },
  highlights: {
    type: String,
    required: true
  },
  activities: [{
    activityName: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true }
  }],
  locations: [{
    name: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true }
  }],
});

export const Itinerary = mongoose.model('Itinerary', ItinerarySchema);
