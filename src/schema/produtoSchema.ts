import { Produtos } from "@prisma/client";
import * as z from "zod";

export const ProdutoSchema: z.ZodSchema = z.object({
  nome: z.string().min(2).max(100),
  preco: z.number().positive(),
  descricao: z.string().max(500).nullable(),
  ativo: z.boolean(),
});

export const ProdutoUpdateSchema: z.ZodSchema = z.object({
  nome: z.string().min(2).max(100).optional(),
  preco: z.number().positive().optional(),
  descricao: z.string().max(500).nullable().optional(),
  ativo: z.boolean().optional(),
});
