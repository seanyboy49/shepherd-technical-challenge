import type { NextApiRequest, NextApiResponse } from "next";
import { ApplicationTypeUrl } from "../../../data/types";
import prisma from "../../../lib/prisma";

/**
 * Handles PUT for each application type
 * 1. Auto application
 * 2. Company application
 * 3. Employee application
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405);
  }
  const applicationType = req.query["application-type"];

  try {
    if (applicationType === ApplicationTypeUrl["Company application"]) {
      const companyId = req.query.id as string;
      const result = await prisma.company.update({
        where: { id: companyId },
        data: req.body,
      });

      return res.status(204).json(result);
    }

    if (applicationType === ApplicationTypeUrl["Employee application"]) {
      const employeeId = req.query.id as string;
      const result = await prisma.employee.update({
        where: { id: employeeId },
        data: req.body,
      });

      return res.status(204).json(result);
    }

    if (applicationType === ApplicationTypeUrl["Auto application"]) {
      const autoId = req.query.id as string;
      const result = await prisma.auto.update({
        where: { id: autoId },
        data: req.body,
      });

      return res.status(204).json(result);
    }
  } catch (error) {
    console.error("error", error);
    res.status(500).json(error);
  }
}
