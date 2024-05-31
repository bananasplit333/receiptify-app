import { IncomingForm } from 'formidable';
import {Blob} from 'buffer';
import fs from 'fs';
import path from 'path';
import FormData from 'form-data';
import fetch from 'node-fetch';

// Disable Next.js's default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Define the directory where uploads will be stored
const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing the files', err);
      res.status(500).json({ error: 'Error parsing the files' });
      return;
    }

    console.log(files.files[0].filepath)
    const filePath = files.files[0].filepath; 
    if (!filePath){
      console.error("file does not exist");
      res.status(400).json({error: 'Error pasring file'});
      return; 
    }
    try {
      const formData = new FormData();
      formData.append('images', fs.createReadStream(filePath));

      const response = await fetch('http://127.0.0.1:5000/process-receipts', {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
      });

      if (!response.ok) {
        throw new Error('Error processing receipts');
      }

      const data = await response.json();
      res.status(response.status).json(data);
    } catch (error) {
      console.error('Error posting the file', error);
      res.status(500).json({ error: 'Error processing receipts' });
    }
  });
};

export default handler;