import { Router } from "express";
import { ItensPedidoSchema } from "../schema/itensPedidoSchema";
import { validate } from "../middlewares/validate/formValidate";
import { itensPedidoController } from "../controller/itensPedido.controller";

const router = Router();

/**
 * @swagger
 * /itens-pedido:
 *   get:
 *     summary: Lista todos os itens de pedidos
 *     tags: [ItensPedido]
 *     responses:
 *       200:
 *         description: Lista de itens de pedido
 */
router.get("/", itensPedidoController.getAll);

/**
 * @swagger
 * /itens-pedido/{id}:
 *   get:
 *     summary: Busca item do pedido por ID
 *     tags: [ItensPedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */
router.get("/:id", itensPedidoController.getById);

/**
 * @swagger
 * /itens-pedido:
 *   post:
 *     summary: Cria um novo item de pedido
 *     tags: [ItensPedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pedidoId
 *               - produtoId
 *               - quantidade
 *             properties:
 *               pedidoId:
 *                 type: integer
 *               produtoId:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *               precoUnitario:
 *                 type: number
 *     responses:
 *       201:
 *         description: Item do pedido criado
 */
router.post(
  "/",
  validate(ItensPedidoSchema as any),
  itensPedidoController.create
);

/**
 * @swagger
 * /itens-pedido/{id}:
 *   put:
 *     summary: Atualiza um item do pedido
 *     tags: [ItensPedido]
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
 *         description: Item do pedido atualizado
 */
router.put(
  "/:id",
  validate(ItensPedidoSchema as any),
  itensPedidoController.update
);

/**
 * @swagger
 * /itens-pedido/{id}:
 *   delete:
 *     summary: Remove um item do pedido
 *     tags: [ItensPedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Item do pedido removido
 */
router.delete("/:id", itensPedidoController.delete);

export default router;
