import { Router } from "express";
import { VendaSchema } from "../schema/vendaSchema";
import { validate } from "../middlewares/validate/formValidate";
import { vendaController } from "../controller/venda.controller";

const router = Router();

/**
 * @swagger
 * /vendas:
 *   get:
 *     summary: Lista todas as vendas
 *     tags: [Venda]
 *     responses:
 *       200:
 *         description: Lista de vendas
 */
router.get("/", vendaController.getAll);

/**
 * @swagger
 * /vendas/{id}:
 *   get:
 *     summary: Busca venda por ID
 *     tags: [Venda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venda encontrada
 *       404:
 *         description: Venda não encontrada
 */
router.get("/:id", vendaController.getById);

/**
 * @swagger
 * /vendas:
 *   post:
 *     summary: Cria uma nova venda
 *     tags: [Venda]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - total
 *             properties:
 *               pedido:
 *                 type: integer
 *               total:
 *                 type: number
 *               dataVenda:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Venda criada
 */
router.post("/", validate(VendaSchema as any), vendaController.create);

/**
 * @swagger
 * /vendas/{id}:
 *   put:
 *     summary: Atualiza uma venda
 *     tags: [Venda]
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
 *         description: Venda atualizada
 */
router.put("/:id", validate(VendaSchema as any), vendaController.update);

/**
 * @swagger
 * /vendas/{id}:
 *   delete:
 *     summary: Remove uma venda
 *     tags: [Venda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Venda removida
 */
router.delete("/:id", vendaController.delete);

export default router;
