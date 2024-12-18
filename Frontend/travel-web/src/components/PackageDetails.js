import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PackageDetails.css';
import Navbar from './Navbar';  // Import Navbar
import Contact from './Contact';

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
    return <p className="loading-text">Loading package details...</p>;
  }

  if (error) {
    return (
      <div className="error-message">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!packageDetails) {
    return <p className="loading-text">No package details found.</p>;
  }

  const imageUrl = packageDetails.image_url
    ? JSON.parse(packageDetails.image_url)[0]
    : "https://via.placeholder.com/1200x600";

  return (
    <div className="package-container">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <header
        className="hero-header"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title">{packageDetails.packageName || "Package Title"}</h1>
        </div>
      </header>

      {/* Package Content Section */}
      <div className="package-content">
        <h2 className="section-title">Package Overview</h2>
        <div className="package-info">
          <p className="package-price">
            Price: <span className="price-text">₹{packageDetails.price || "N/A"}</span>
          </p>
          <p className="package-duration">
            Duration: <span>{packageDetails.duration || "N/A"} days</span>
          </p>
          <p className="package-highlights">
            Highlights: <span>{packageDetails.highlight || "N/A"}</span>
          </p>
          <p className="package-discount">
            Discount: <span className="discount-text">₹{packageDetails.discount || "N/A"}</span>
          </p>
        </div>

        {/* Itinerary Section */}
        <h2 className="section-title">Itinerary</h2>
        <div className="itinerary-grid">
          {packageDetails.itinerary.map((day, index) => (
            <div key={index} className="itinerary-day">
              <h3 className="day-title">Day {day.dayNumber}</h3>
              <p><strong>Highlights:</strong> {day.highlights || "N/A"}</p>

              <div className="activities-section">
                <h4>Activities:</h4>
                <ul className="activities-list">
                  {day.activities.map((activity) => (
                    <li key={activity._id}>
                      <span className="activity-name">{activity.activityName}</span>:{" "}
                      {activity.description || "N/A"}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="locations-section">
                <h4>Locations:</h4>
                <ul className="locations-list">
                  {day.locations.map((location) => (
                    <li key={location._id}>
                      <span className="location-name">{location.name}</span>:{" "}
                      {location.description || "N/A"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact /> 
    </div>
  );
};

export default PackageDetails;



