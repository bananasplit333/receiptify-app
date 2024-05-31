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

    if (!files) {
      console.error('No files were uploaded');
      res.status(400).json({ error: 'No files were uploaded' });
      return;
    }
    const filePath = files.files[0].filepath; 
    if (!filePath) {
      console.error('File path does not exist');
      res.status(400).json({ error: 'File path does not exist' });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('images', fs.createReadStream(filePath));
  
  
      const response = await fetchWithTimeout('http://127.0.0.1:5000/process-receipts', {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
      });
     
      console.log(response);

      if (!response.ok) {
        throw new Error('Error processing receipts');
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error posting the file', error);
      res.status(500).json({ error: 'Error processing receipts' });
    }
  });
};

async function fetchWithTimeout(resource, options = {}, timeout = 120000) {
  const { signal, ...restOptions } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...restOptions,
    signal: signal || controller.signal,
  });
  clearTimeout(id);
  return response;
}

export default handler;

const sampleJson = {
  "Groceries & Food": [
    "BROWN RICE, 2.99",
    "FZN ORGANIC GREEN BEANS, 2.29",
    "PIE CRUSTS, 3.99",
    "BLUEBERRY WAFFLES, 1.99",
    "TAQUITOS, 4.99"
  ],
  "Electronics & Appliances": [
    "USB CABLE, 5.99",
    "BLUETOOTH SPEAKER, 49.99"
  ],
  "Home & Living": [
    "CANDLE, 12.99",
    "COFFEE MUG, 7.99"
  ]
};
