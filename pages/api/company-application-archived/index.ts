import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/**
 * Handles POST and PUT for /api/company-application
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const result = await prisma.company.create({ data: req.body });

      res.json(result);
    } catch (error) {
      console.log("Error saving", error);
    }
  }

  if (req.method === "PUT") {
    try {
      const result = await prisma.company.update({
        where: { id: req.body.id },
        data: req.body,
      });

      res.json(result);
    } catch (error) {
      console.log("Error saving", error);
    }
  }
}
