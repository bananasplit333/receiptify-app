import multer from 'multer';
import FormData from 'form-data';
import fetch from 'node-fetch';

// Disable Next.js's default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

// Set up multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  // Use multer to handle the file upload
  const multerUpload = upload.single('file');

  multerUpload(req, res, async function (err) {
    if (err) {
      console.error('Error uploading the file', err);
      return res.status(500).json({ error: 'Error uploading the file' });
    }

    const file = req.file;

    if (!file) {
      console.error('No files were uploaded');
      return res.status(400).json({ error: 'No files were uploaded' });
    }

    try {
      const formData = new FormData();
      formData.append('image', file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
      {}
      const response = await fetchWithTimeout('https://api.toddie.org/process-receipts', {
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
