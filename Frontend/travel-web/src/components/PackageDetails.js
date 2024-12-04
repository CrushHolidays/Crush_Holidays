import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams(); // Assuming the package ID is passed as a URL parameter
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch package details from the server
    fetch(`http://localhost:7000/api/v1/Iternaries/get/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch package details");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        setPackageDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading package details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!packageDetails) {
    return <p>No package details found.</p>;
  }

  // Parsing the image URLs from JSON string
  let imageUrls = [];
  try {
    imageUrls = JSON.parse(packageDetails.image_url);
  } catch (e) {
    console.error("Error parsing image URL:", e);
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4">{packageDetails.packageName}</h1>

      {/* Image Rendering */}
      {imageUrls.length > 0 && (
        <div className="flex gap-4 mb-4">
          {imageUrls.map((image, index) => (
            <img
              key={index}
              src={image}  // image URL after parsing
              alt={`${packageDetails.packageName} image ${index + 1}`}
              className="w-1/2 rounded-lg"
            />
          ))}
        </div>
      )}

      <p className="text-lg mb-2"><strong>Price:</strong> ₹{packageDetails.price}</p>
      <p className="text-lg mb-2"><strong>Duration:</strong> {packageDetails.duration} days</p>
      <p className="text-lg mb-2"><strong>Highlights:</strong> {packageDetails.highlight}</p>
      <p className="text-lg mb-4"><strong>Discount:</strong> ₹{packageDetails.discount}</p>

      <h2 className="text-xl font-medium mb-3">Itinerary</h2>
      {packageDetails.itinerary.map((day, index) => (
        <div
          key={index}
          className="flex flex-col mb-4 p-4 border border-gray-300 rounded-lg"
        >
          <h3 className="text-lg font-semibold mb-2">Day {day.dayNumber}</h3>
          <p><strong>Highlights:</strong> {day.highlights}</p>

          <h4 className="font-medium mt-3">Activities:</h4>
          <ul className="list-disc ml-5">
            {day.activities.map((activity) => (
              <li key={activity._id}>
                <strong>{activity.activityName}</strong>: {activity.description} <br />
                <em>Time:</em> {activity.time} <br />
                <em>Location:</em> {activity.location}
              </li>
            ))}
          </ul>

          <h4 className="font-medium mt-3">Locations:</h4>
          <ul className="list-disc ml-5">
            {day.locations.map((location) => (
              <li key={location._id}>
                <strong>{location.name}</strong>: {location.description} <br />
                <em>Address:</em> {location.address}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PackageDetails;
