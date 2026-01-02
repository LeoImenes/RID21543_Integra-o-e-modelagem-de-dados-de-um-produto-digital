import { Cliente } from "@prisma/client";
import * as z from "zod";

export const ClienteSchema : z.ZodSchema = z.object({
  nome: z.string().min(2).max(100),
  email: z.string().email(),
  telefone: z.string().min(10).max(15),
  cpf: z.string().min(11).max(14),
});

export const ClienteUpdateSchema: z.ZodSchema = z.object({
  nome: z.string().min(2).max(100).optional(),
  email: z.string().email().optional(),
  telefone: z.string().min(10).max(15).optional(),
  cpf: z.string().min(11).max(14).optional(),
});
