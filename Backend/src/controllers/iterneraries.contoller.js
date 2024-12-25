import { Itinerary } from "../models/iterneraries.models.js";
import { Packages } from "../models/Packages.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const newItinerary = asyncHandler(async (req, res) => {
  const responseData = Array.isArray(req.body) ? req.body : [req.body];
  const responses = [];

  for (const data of responseData) {
    const { name, plan } = data;

    // Find the package by name
    const packageName = await Packages.findOne({ Package_name: name }).select("_id");

    if (!packageName) {
      return res.status(400).json({ message: "Package name not found" });
    }

    // Format the plans array
    const formattedPlans = Array.isArray(plan) ? plan.map(plans => ({
      dayNumber: plans.day_no,
      highlights: plans.highlights,
      activities: plans.activities || [],
      locations: plans.locations || [],
    })) : [];

    // Create a new itinerary with all plans
    const itinerary = new Itinerary({
      packageName: packageName._id,
      plans: formattedPlans, // Embed plans into the itinerary
    });

    // Save the itinerary
    const savedItinerary = await itinerary.save();
    responses.push(savedItinerary);
  }

  return res.status(201).json(responses);
});
const getItineraryByPackage = asyncHandler(async (req, res) => {
  try {
    console.log("Fetching Itinerary by PackageId");
    // Extract the packageId from the URL params
    const packageId = req.params.packageId;

    // Fetch the package details using the provided packageId
    const packageDetails = await Packages.findById(packageId);

    // Check if the package exists
    if (!packageDetails) {
      return res.status(404).json({ message: "Package not found" });
    }

    console.log("Package Details:", packageDetails);

    // Fetch itineraries related to the packageId and populate `packageName`
    const itineraries = await Itinerary.find({ packageName: packageId });
    

    // Check if itineraries exist
    if (!itineraries || itineraries.length === 0) {
      return res.status(404).json({ message: "Itineraries not found for the package" });
    }

    // Structure the response
    const formattedResponse = {
      packageName: packageDetails.Package_name,
      price: packageDetails.Price,
      duration: packageDetails.Duration,
      highlight: packageDetails.Highlight,
      discount: packageDetails.Discount,
      image_url: JSON.parse(packageDetails.Image_url || "[]"),
      itinerary: itineraries.map((itinerary) => ({
        plans: itinerary.plans.map((plan) => ({
          dayNumber: plan.dayNumber,
          highlights: plan.highlights,
          activities: plan.activities.map((activity) => ({
            activityName: activity.activityName,
            description: activity.description,
            time: activity.time,
            location: activity.location,
          })),
          locations: plan.locations.map((location) => ({
            name: location.name,
            address: location.address,
            description: location.description,
          })),
        })),
      })),
    };

    // Return the response with status 200
    return res.status(200).json(formattedResponse);
  } catch (error) {
    // Handle errors and respond with a status 500
    console.error("Error fetching itineraries:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

export { newItinerary, getItineraryByPackage };
