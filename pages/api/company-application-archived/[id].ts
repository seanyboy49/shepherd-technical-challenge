import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/**
 * PUT/api/company-application/[id]
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const companyId = req.query.id as string;
      const result = await prisma.company.update({
        where: { id: companyId },
        data: req.body,
      });

      res.json(result);
    } catch (error) {
      res.status(500);
    }
  } else {
    res.status(405).json({ message: "Only PUT requests are allowed" });
  }
}
