import type { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";

import { ApplicationTypeUrl } from "../../../data/types";
import prisma from "../../../lib/prisma";

/**
 * Handles POST for each application type
 * 1. Auto application
 * 2. Company application
 * 3. Employee application
 */
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      throw new ApiError(405, "Method not allowed");
    }

    const cookies = req.cookies;
    if (!cookies.auth || cookies.auth !== "shepherd") {
      throw new ApiError(401, "Missing auth cookie");
    }

    const applicationType = req.query["application-type"];

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
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    res.status(500).json(error);
  }
}
