import { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

// Disable bodyParser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing the files', err);
        res.status(500).json({ error: 'Error parsing the files' });
        return;
      }

      res.status(200).json({ fields, files });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;