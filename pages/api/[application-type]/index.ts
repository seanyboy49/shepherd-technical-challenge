import { Auto, Company, Employee } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { ApplicationTypeUrl } from "../../../data/types";
import prisma from "../../../lib/prisma";

/**
 * Handles POST for /api/[application-type]
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405);
  }

  const applicationType = req.query["application-type"];

  try {
    if (applicationType === ApplicationTypeUrl["Company application"]) {
      const result = await prisma.company.create({ data: req.body });
      return res.status(201).json(result);
    }
    if (applicationType === ApplicationTypeUrl["Auto application"]) {
      const result = await prisma.auto.create({ data: req.body });
      return res.status(201).json(result);
    }
    if (applicationType === ApplicationTypeUrl["Employee application"]) {
      const result = await prisma.employee.create({ data: req.body });
      return res.status(201).json(result);
    }
  } catch (error) {
    console.log("Error saving", error);
  }
}
