import { Router } from "express";
import { validate } from "../middlewares/validate/formValidate";
import { PedidoSchema } from "../schema/pedidosSchema";
import { pedidoController } from "../controller/pedidos.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pedido
 *   description: Gerenciamento de pedidos
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Lista todos os pedidos
 *     tags: [Pedido]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 */
router.get("/", pedidoController.getAll);

/**
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     summary: Busca pedido por ID
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *       404:
 *         description: Pedido não encontrado
 */
router.get("/:id", pedidoController.getById);

/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Pedido]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cliente
 *               - status
 *               - itens
 *             properties:
 *               cliente:
 *                 type: integer
 *                 example: 1
 *               status:
 *                 type: string
 *                 example: ABERTO
 *               descricao:
 *                 type: string
 *                 example: Pedido de teste
 *               itens:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - produtoId
 *                     - quantidade
 *                   properties:
 *                     produtoId:
 *                       type: integer
 *                       example: 1
 *                     quantidade:
 *                       type: integer
 *                       example: 2
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post("/", validate(PedidoSchema as any), pedidoController.create);

/**
 * @swagger
 * /pedidos/{id}:
 *   put:
 *     summary: Atualiza um pedido
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 example: FECHADO
 *               descricao:
 *                 type: string
 *                 example: Pedido atualizado
 *     responses:
 *       200:
 *         description: Pedido atualizado
 */
router.put("/:id", pedidoController.update);

/**
 * @swagger
 * /pedidos/{id}:
 *   delete:
 *     summary: Remove um pedido
 *     tags: [Pedido]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Pedido removido
 */
router.delete("/:id", pedidoController.delete);

export default router;
