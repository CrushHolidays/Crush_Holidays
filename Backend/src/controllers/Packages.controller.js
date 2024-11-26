import { uploadMultipleFiles } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Packages } from "../models/Packages.models.js";

const AddPackages = asyncHandler(async (req, res) => {
    const { Package_name, Price, Duration, Highlight, Discount } = req.body;

    // Validate required fields
    if (!Package_name || !Price || !Duration || !Highlight) {
        return res.status(400).json(
            ApiResponse.error("All fields except Discount are required.", 400)
        );
    }
    if (!req.files || req.files.length === 0) {
        return res.status(400).json(ApiResponse.error("No files uploaded.", 400));
    }

    // Check if the package already exists
    const existingPackage = await Packages.findOne({
        where: { Package_name },
    });

    if (existingPackage) {
        return res
            .status(409)
            .json(ApiResponse.error("Package with this name already exists.", 409));
    }

    // Upload files to Cloudinary
    const files = req.files;
    const imageUrls = await uploadMultipleFiles(files);

    if (!imageUrls || imageUrls.includes(null)) {
        return res.status(500).json(
            ApiResponse.error("Error uploading images to Cloudinary.", 500)
        );
    }

    // Save package details to the database
    const newPackage = await Packages.create({
        Package_name,
        Price,
        Duration,
        Highlight,
        Discount: Discount || 0, // Default Discount to 0 if not provided
        Image_url: JSON.stringify(imageUrls), // Store image URLs as a JSON array
    });

    return res.status(201).json(
        ApiResponse.success("Package added successfully.", {
            package: newPackage,
        })
    );
});

const GetallPackages=asyncHandler(async(req,res)=>{
    const packages=await Packages.find({});
    if(!packages)
    {
        return res.status(404).json(ApiResponse.error("No packages found.", 404));
    }
    return res.status(200).json(ApiResponse.success("Packages retrieved successfully.", {
        packages
    }))
})


export { AddPackages,GetallPackages };
