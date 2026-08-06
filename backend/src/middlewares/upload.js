import multer from 'multer';

// Use memory storage to temporarily hold uploaded image buffers
const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // Limit files to 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images (PNG, JPG, JPEG) are allowed'), false);
    }
  }
});

export default upload;
