import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const search = request.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    response.json(products);
  } catch (error) {
    response
      .status(500)
      .json({ message: `Error retriving products: ${error}` });
  }
};

export const createProduct = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = request.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    response.status(201).json(product);
  } catch (error) {
    response.status(500).json({ message: `Error creating product: ${error}` });
  }
};
