import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
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
        <div className="home-page">
            {packages.map((pkg) => (
                <div
                    key={pkg._id}
                    className="card"
                    onClick={() => handleCardClick(pkg._id)}
                >
                    <img
                        src={JSON.parse(pkg.Image_url[0])[0]}
                        alt={pkg.Package_name}
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

export default HomePage;
