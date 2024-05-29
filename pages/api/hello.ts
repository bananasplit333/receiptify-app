// pages/api/hello.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  headers: any;
  query: any;
  body: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method, headers, query, body } = req;

  res.status(200).json({
    message: 'Hello from Next.js API!',
    headers,
    query,
    body,
  });
}