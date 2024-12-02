import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/Packages/get-packages")
      .then((response) => response.json())
      .then((data) => {
        setPackages(data.data.packages);
      })
      .catch((error) => console.error("Error fetching packages:", error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/packages/${id}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
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
          }}
        >
          <img
            src={JSON.parse(pkg.Image_url[0])[0]}
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
