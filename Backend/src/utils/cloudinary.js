// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
// });

// export const uploadMultipleFiles = async (files) => {
//     try {
//         const uploads = files.map((file) =>
//             cloudinary.uploader.upload(file.path, {
//                 folder: 'packages', // Optional: specify a folder in Cloudinary
//             })
//         );
//         const results = await Promise.all(uploads);
//         return results.map((result) => result.secure_url);
//     } catch (error) {
//         console.error('Error uploading files:', error);
//         return null; // Return null or handle error accordingly
//     }
// };

// import { v2 as cloudinary } from 'cloudinary';
import cloudinary from 'cloudinary';
import multer from 'multer';

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Multer configuration to handle in-memory uploads
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Function to upload a single file buffer to Cloudinary
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
            {
                folder: 'packages', // Optional: specify a folder in Cloudinary
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        );
        uploadStream.end(fileBuffer); // Pass the buffer to the upload stream
    });
};

// Function to upload multiple files to Cloudinary
export const uploadMultipleFiles = async (files) => {
    try {
        // If no files are provided, return null
        if (!files || files.length === 0) return null;

        // Map each file buffer to a Cloudinary upload promise
        const uploadPromises = files.map((file) => uploadToCloudinary(file.buffer));

        // Wait for all uploads to complete
        const uploadResults = await Promise.all(uploadPromises);

        return uploadResults; // Return an array of secure URLs
    } catch (error) {
        console.error('Error uploading files:', error);
        return null; // Handle error accordingly
    }
};
