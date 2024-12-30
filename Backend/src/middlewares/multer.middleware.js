 import multer from 'multer';

// // const storage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, './public/packages'); // Temporary folder for uploads
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, `${Date.now()}-${file.originalname}`);
// //     },
// // });

// // export const upload = multer({ storage });

const storage = multer.memoryStorage();

export const upload = multer({ storage });

