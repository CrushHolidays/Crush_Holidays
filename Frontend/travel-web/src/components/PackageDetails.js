import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7000/api/v1/Iternaries/get/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch package details");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setPackageDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching package details:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-600 mt-20">Loading package details...</p>;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 border border-red-300 rounded max-w-md mx-auto mt-20">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!packageDetails || !packageDetails.itinerary) {
    return <p className="text-center text-gray-600 mt-20">No package details or itinerary found.</p>;
  }

  let imageUrls = [];
  try {
    imageUrls = packageDetails.image_url ? JSON.parse(packageDetails.image_url) : [];
  } catch (e) {
    console.error("Error parsing image URLs:", e);
    imageUrls = [];
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-500 to-white min-h-screen">
      {/* Hero Section */}
      <header
        className="w-full bg-cover bg-center py-16 mb-8 text-white"
        style={{ backgroundImage: `url(${imageUrls[0] || "https://via.placeholder.com/1200x600"})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold">{packageDetails.packageName}</h1>
          <p className="text-lg mt-2">An unforgettable adventure awaits!</p>
        </div>
      </header>

      {/* Image Gallery */}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        {imageUrls.length > 0 ? (
          imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${packageDetails.packageName} image ${index + 1}`}
              className="w-64 h-40 rounded-lg shadow-md object-cover transition-transform transform hover:scale-105"
            />
          ))
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>

      {/* Package Details */}
      <div className="text-center mb-8">
        <p className="text-xl font-semibold mb-2">
          Price: <span className="text-green-600">₹{packageDetails.price || "N/A"}</span>
        </p>
        <p className="text-lg">Duration: {packageDetails.duration || "N/A"} days</p>
        <p className="text-lg">Highlights: {packageDetails.highlight || "N/A"}</p>
        <p className="text-lg">
          Discount: <span className="text-red-500">₹{packageDetails.discount || "N/A"}</span>
        </p>
      </div>

      {/* Itinerary Section */}
      <h2 className="text-3xl font-bold mb-6">Itinerary</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packageDetails.itinerary.map((day, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Day {day.dayNumber}</h3>
            <p><strong>Highlights:</strong> {day.highlights || "N/A"}</p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Activities:</h4>
              <ul className="list-disc ml-5">
                {day.activities.map((activity) => (
                  <li key={activity._id}>
                    <span className="font-medium">{activity.activityName}</span>: {activity.description || "N/A"}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Locations:</h4>
              <ul className="list-disc ml-5">
                {day.locations.map((location) => (
                  <li key={location._id}>
                    <span className="font-medium">{location.name}</span>: {location.description || "N/A"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageDetails;

