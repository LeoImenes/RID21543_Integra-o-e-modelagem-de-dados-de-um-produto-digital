import { NextFunction, Response,Request } from "express";
import { AnyZodObject, ZodSchema } from "zod/v3";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
        console.log(err);
      return res.status(400).json({
        error: "Erro de validação",
        details: (err as any).errors,
      });
    }
  };
