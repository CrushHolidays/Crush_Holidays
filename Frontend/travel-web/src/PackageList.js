import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://crush-holidays-backend.onrender.com/api/v1/Packages/get-packages")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch packages");
        }
        return response.json();
      })
      .then((data) => {
        setPackages(data.data.packages);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching packages:", error);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/packages/${id}`);
  };

  if (isLoading) {
    return <div>Loading packages...</div>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px", justifyContent: "center" }}>
      {packages.map((pkg) => (
        <div
          key={pkg._id}
          onClick={() => handleCardClick(pkg._id)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "250px",
            cursor: "pointer",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <img
            src={pkg.Image_url?.[0] ? JSON.parse(pkg.Image_url[0])[0] : "path/to/default/image.jpg"}
            alt={pkg.Package_name}
            style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
          />
          <h3>{pkg.Package_name.replace(/\"/g, "")}</h3>
          <p>Price: ₹{pkg.Price}</p>
          <p>Duration: {pkg.Duration} days</p>
          <p>Highlight: {pkg.Highlight.replace(/\"/g, "")}</p>
          <p>Discount: ₹{pkg.Discount}</p>
        </div>
      ))}
    </div>
  );
};

export default PackageList;
