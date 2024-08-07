import { IncomingForm } from 'formidable';
import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';
// Disable Next.js's default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
  maxDuration: 60,
};

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const form = new IncomingForm();

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
    console.log(filePath); 
    if (!filePath) {
      console.error('File path does not exist');
      res.status(400).json({ error: 'File path does not exist' });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', fs.createReadStream(filePath));
  
  
      const response = await fetchWithTimeout('http://127.0.0.1:5000/process-receipts', {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
      });
     

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

  try {
    const response = await fetch(resource, {
      ...restOptions,
      signal: signal || controller.signal,
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    if (retries > 0 && (error.name === 'AbortError' || error.name === 'FetchError')) {
      console.log(`Retrying... ${retries} attempts left`);
      return fetchWithTimeout(resource, options, timeout, retries - 1);
    }
    throw error;
  }
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
