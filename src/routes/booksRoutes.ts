// src/routes/bookRoutes.ts
import { Router } from "express";
import { bookController } from "../controller/booksController";
import { BookSchema, BookUpdateSchema } from "../schema/bookSchema";
import { validate } from "../middlewares/validate/bookValidate";

const router = Router();

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.post("/", validate(BookSchema as any), bookController.create);
router.put("/:id", validate(BookUpdateSchema as any), bookController.update);
router.delete("/:id", bookController.delete);

export default router;
