import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

export const uploadMultipleFiles = async (files) => {
    try {
        const uploads = files.map((file) =>
            cloudinary.uploader.upload(file.path, {
                folder: 'packages', // Optional: specify a folder in Cloudinary
            })
        );
        const results = await Promise.all(uploads);
        return results.map((result) => result.secure_url);
    } catch (error) {
        console.error('Error uploading files:', error);
        return null; // Return null or handle error accordingly
    }
};
