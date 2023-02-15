import type { NextApiRequest, NextApiResponse } from 'next';
import { getPortifolio } from '../../lib/getPortifolio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const data = await getPortifolio();
    return res.status(200).json(data);
  }

  res.status(200).json({ name: 'John Doe' });
}