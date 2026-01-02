/**
 * @swagger
 * tags:
 *   name: Estoque
 *   description: Gerenciamento de estoque
 */

import { Router } from "express";
import { validate } from "../middlewares/validate/formValidate";
import { estoqueController } from "../controller/estoque.controller";
import { EstoqueSchema, EstoqueUpdateSchema } from "../schema/estoqueSchema";

const router = Router();

/**
 * @swagger
 * /estoque:
 *   get:
 *     summary: Lista todos os estoques
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de estoques
 */
router.get("/", estoqueController.getAll);

/**
 * @swagger
 * /estoque/{id}:
 *   get:
 *     summary: Busca estoque por ID
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Estoque encontrado
 *       404:
 *         description: Estoque não encontrado
 */
router.get("/:id", estoqueController.getById);

/**
 * @swagger
 * /estoque:
 *   post:
 *     summary: Cria um novo estoque
 *     tags: [Estoque]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - produtoId
 *             properties:
 *               produtoId:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Estoque criado
 */
router.post("/", validate(EstoqueSchema as any), estoqueController.create);

/**
 * @swagger
 * /estoque/{id}:
 *   put:
 *     summary: Atualiza um estoque
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Estoque atualizado
 */
router.put("/:id", validate(EstoqueUpdateSchema as any), estoqueController.update);

/**
 * @swagger
 * /estoque/{id}:
 *   delete:
 *     summary: Remove um estoque
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Estoque removido
 */
router.delete("/:id", estoqueController.delete);

export default router;
