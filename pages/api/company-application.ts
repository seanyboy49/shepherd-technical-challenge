import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// POST /api/company-application
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await prisma.company.create({ data: req.body });

    res.json(result);
  } catch (error) {
    console.log("Error saving", error);
  }
}
