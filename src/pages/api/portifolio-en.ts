import type { NextApiRequest, NextApiResponse } from "next";
import { getPortifolioEn } from "../../lib/getPortifolio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const data = await getPortifolioEn();
    return res.status(200).json(data);
  }

  res.status(200).json({ name: "John Doe" });
}
