import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PackageDetails.css';
import Navbar from './Navbar'; // Import Navbar
import Contact from './Contact';

const PackageDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleWhatsAppClick = (phoneNumber, message) => {
        const sanitizedNumber = phoneNumber.replace(/\s+/g, '').replace(/[^0-9]/g, '');
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    };
      // fetch(`http://localhost:7000/api/v1/Iternaries/get/${id}`)https://crush-holidays-backend.onrender.com
    useEffect(() => {
        fetch(`https://crush-holidays-backend.onrender.com/api/v1/Iternaries/get/${id}`)
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

    const imageUrl = packageDetails.image_url && packageDetails.image_url.length > 0
        ? packageDetails.image_url[0]
        : "https://via.placeholder.com/1200x600";

    return (
        <>
            <Navbar />
            <div className="package-container">
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
                        {/* <p className="package-price">
                            Price:<span className="price-text"> ₹{packageDetails.price || "N/A"}</span>
                        </p> */}
                        <p className="package-duration">
                            Duration:<span>{packageDetails.duration || "N/A"} days</span>
                        </p>
                        <p className="package-highlights">
                            Highlights:<span>{packageDetails.highlight || "N/A"}</span>
                        </p>
                        {/* <p className="package-discount">
                            Discount:<span className="discount-text"> ₹{packageDetails.discount || "N/A"}</span>
                        </p> */}
                    </div>
                    <div className="itinerary-grid">
    {packageDetails.itinerary &&
    Array.isArray(packageDetails.itinerary) &&
    packageDetails.itinerary.length > 0 ? (
        packageDetails.itinerary.map((planSet, index) => (
            <div key={index} className="itinerary-day-set">
                {planSet.plans &&
                Array.isArray(planSet.plans) &&
                planSet.plans.length > 0 ? (
                    planSet.plans.map((day, dayIndex) => (
                        <div key={dayIndex} className="itinerary-day-card">
                            <h4 className="day-title">Day {day.dayNumber}</h4>
                            <p><strong>Highlights:</strong> {day.highlights || "N/A"}</p>

                            <div className="activities-section">
                                <h5>Activities:</h5>
                                <ul className="activities-list">
                                    {day.activities &&
                                    Array.isArray(day.activities) &&
                                    day.activities.length > 0 ? (
                                        day.activities.map(
                                            (activity, activityIndex) => (
                                                <li key={activityIndex}>
                                                    <span className="activity-name">
                                                        {activity.activityName}
                                                    </span>
                                                    : {activity.description || "N/A"} -{" "}
                                                    <span>{activity.time || "N/A"}</span> at{" "}
                                                    <span>{activity.location || "N/A"}</span>
                                                </li>
                                            )
                                        )
                                    ) : (
                                        <li>No activities available</li>
                                    )}
                                </ul>
                            </div>

                            <div className="locations-section">
                                <h5>Locations:</h5>
                                <ul className="locations-list">
                                    {day.locations &&
                                    Array.isArray(day.locations) &&
                                    day.locations.length > 0 ? (
                                        day.locations.map(
                                            (location, locationIndex) => (
                                                <li key={locationIndex}>
                                                    <span className="location-name">
                                                        {location.name}
                                                    </span>
                                                    : {location.description || "N/A"} (Address:{" "}
                                                    {location.address || "N/A"})
                                                </li>
                                            )
                                        )

                                        
                                    ) : (
                                        <li>No locations available</li>
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No plans available</p>
                )}
            </div>
        ))
    ) : (
        <p>No itinerary available for this package</p>
    )}
</div>
<p className="customize-plan">
  <span>If you want to customize your plan, contact us </span>
  
</p>
<button
  className="whatsapp-button2"
  onClick={() =>
    handleWhatsAppClick(
      '+919611001991',
      `Hello, I am interested in this: ${packageDetails.packageName}`
    )
  }
>
<a
    href="https://wa.me/+919611001991?text=I%20would%20like%20to%20customize%20my%20plan"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp Icon"
      className="whatsapp-icon"
    />  
    Customize on WhatsApp
  </a>
</button>


                </div>
                <Contact />
            </div>
        </>
    );
};

export default PackageDetails;

