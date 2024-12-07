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
    return <p>Loading package details...</p>;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 border border-red-300 rounded">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!packageDetails || !packageDetails.itinerary) {
    return <p>No package details or itinerary found.</p>;
  }

  let imageUrls = [];
  try {
    imageUrls = packageDetails.image_url ? JSON.parse(packageDetails.image_url) : [];
  } catch (e) {
    console.error("Error parsing image URLs:", e);
    imageUrls = [];
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4">{packageDetails.packageName}</h1>

      {imageUrls.length > 0 ? (
        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          {imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${packageDetails.packageName} image ${index + 1}`}
              className="w-full sm:w-1/2 rounded-lg"
            />
          ))}
        </div>
      ) : (
        <p>No images available.</p>
      )}

      <p className="text-lg mb-2"><strong>Price:</strong> ₹{packageDetails.price || "N/A"}</p>
      <p className="text-lg mb-2"><strong>Duration:</strong> {packageDetails.duration || "N/A"} days</p>
      <p className="text-lg mb-2"><strong>Highlights:</strong> {packageDetails.highlight || "N/A"}</p>
      <p className="text-lg mb-4"><strong>Discount:</strong> ₹{packageDetails.discount || "N/A"}</p>

      <h2 className="text-xl font-medium mb-3">Itinerary</h2>
      {packageDetails.itinerary.length > 0 ? (
        packageDetails.itinerary.map((day, index) => (
          <div
            key={index}
            className="flex flex-col mb-4 p-4 border border-gray-300 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Day {day.dayNumber}</h3>
            <p><strong>Highlights:</strong> {day.highlights || "N/A"}</p>

            <h4 className="font-medium mt-3">Activities:</h4>
            <ul className="list-disc ml-5">
              {day.activities.map((activity) => (
                <li key={activity._id}>
                  <strong>{activity.activityName}</strong>: {activity.description || "N/A"} <br />
                  <em>Time:</em> {activity.time || "N/A"} <br />
                  <em>Location:</em> {activity.location || "N/A"}
                </li>
              ))}
            </ul>

            <h4 className="font-medium mt-3">Locations:</h4>
            <ul className="list-disc ml-5">
              {day.locations.map((location) => (
                <li key={location._id}>
                  <strong>{location.name}</strong>: {location.description || "N/A"} <br />
                  <em>Address:</em> {location.address || "N/A"}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No itinerary available.</p>
      )}
    </div>
  );
};

export default PackageDetails;
