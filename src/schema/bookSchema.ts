import { Book } from "@prisma/client";
import * as z from "zod";

export const BookSchema: z.ZodSchema = z.object({
  id: z.number(),
  titulo: z.string().min(2).max(100),
  num_paginas: z.number().min(1),
  isbn: z.string().min(10).max(13),
  editora: z.string().min(2).max(100),
});

export const BookUpdateSchema: z.ZodSchema = z.object({
  id: z.number().optional(),
  titulo: z.string().min(2).max(100).optional(),
  num_paginas: z.number().min(1).optional(),
  isbn: z.string().min(10).max(13).optional(),
  editora: z.string().min(2).max(100).optional(),
});
