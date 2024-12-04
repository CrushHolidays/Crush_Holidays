import { Itinerary } from "../models/iterneraries.models.js";
import { Packages } from "../models/Packages.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const newItinerary = asyncHandler(async (req, res) => {
  const responseData = Array.isArray(req.body) ? req.body : [req.body];
  const responses = [];

  // Use Promise.all to handle multiple itinerary creations in parallel
  for (const data of responseData) {
    const { name, day_no, highlights, activities, locations } = data;

    // Find the package by name, using await to ensure the result is returned before proceeding
    const package_name = await Packages.findOne({ Package_name: name }).select("_id");

    if (!package_name) {
      return res.status(400).json({ message: "Package name not found" });
    }

    // Create a new itinerary document with the provided data
    const newItinerary = new Itinerary({
      packageName: package_name._id, // Using the _id of the found package
      dayNumber: day_no,
      highlights,
      activities,
      locations,
    });

    // Save the itinerary and add it to the responses array
    const savedItinerary = await newItinerary.save();
    responses.push(savedItinerary);
  }

  // Return the response with all saved itineraries
  return res.status(201).json(responses);
});

const getItineraryByPackage = asyncHandler(async (req, res) => {
  // Get the packageId (not packageName) from the URL params
  const packageId = req.params.packageId;

  // Find the package by ID to retrieve the package details
  const packageDetails = await Packages.findById(packageId);

  if (!packageDetails) {
    return res.status(404).json({ message: "Package not found" });
  }

  // Find itineraries for the package and populate packageName field
  const itineraries = await Itinerary.find({ packageName: packageId })
    .populate('packageName')
    .sort({ dayNumber: 1 }); // Sort by dayNumber to ensure proper day ordering

  // Group itineraries by package name
  const formattedResponse = {
    packageName: packageDetails.Package_name,
    price: packageDetails.Price,
    duration: packageDetails.Duration,
    highlight: packageDetails.Highlight,
    discount: packageDetails.Discount,
    image_url: packageDetails.Image_url,
    itinerary: itineraries.map(itinerary => ({
      dayNumber: itinerary.dayNumber,
      highlights: itinerary.highlights,
      activities: itinerary.activities,
      locations: itinerary.locations
    }))
  };

  return res.status(200).json(formattedResponse);
});

export { newItinerary,getItineraryByPackage };
