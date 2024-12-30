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

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

// Multer configuration to handle in-memory uploads
const storage = multer.memoryStorage();
export const upload = multer({ storage });

// Function to upload multiple files to Cloudinary
export const uploadMultipleFiles = async (files) => {
    try {
        // If no files are provided, return null
        if (!files || files.length === 0) return null;

        // Upload each file buffer directly to Cloudinary
        const uploads = files.map((file) =>
            cloudinary.uploader.upload_stream(
                {
                    folder: 'packages', // Optional: specify a folder in Cloudinary
                },
                (error, result) => {
                    if (error) {
                        console.error('Error uploading file:', error);
                        return null;
                    }
                    return result.secure_url; // Return the URL after successful upload
                }
            )
        );

        // Pass file buffers to Cloudinary uploader using the stream method
        const results = await Promise.all(
            files.map((file) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
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
                    stream.end(file.buffer); // Send the file buffer to Cloudinary
                });
            })
        );

        return results; // Return an array of secure URLs
    } catch (error) {
        console.error('Error uploading files:', error);
        return null; // Handle error accordingly
    }
};
