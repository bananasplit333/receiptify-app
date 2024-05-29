// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

const handler = async (req, res) => {
  res.status(200).json({text: 'Hello'});
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to parse form' });
      }

      // Get the uploaded file
      const file = files.file;

       
      // Validate the file type
      const fileType = mime.lookup(file.path);
      if (!fileType || !fileType.startsWith('image/')) {
        fs.unlinkSync(file.path); // Remove the invalid file
        return res.status(400).json({ error: 'Only image files are allowed' });
      }

      console.log("File uploaded:", file);

      // File has been uploaded and saved locally
      return res.status(200).json({ message: 'File uploaded successfully', file });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler
