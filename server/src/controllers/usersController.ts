import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const users = await prisma.users.findMany();
    response.json(users);
  } catch (error) {
    response.status(500).json({ message: `Error retrieving users: ${error}` });
  }
};
