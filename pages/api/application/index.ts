import type { NextApiRequest, NextApiResponse } from "next";

// GET /api/application
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({});
}
