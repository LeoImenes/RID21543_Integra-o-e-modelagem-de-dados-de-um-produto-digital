import { Router } from "express";
import { ClienteSchema, ClienteUpdateSchema } from "../schema/clienteSchema";
import { validate } from "../middlewares/validate/formValidate";
import { clienteController } from "../controller/cliente.contoller";

const router = Router();

/**
 * @openapi
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags:
 *       - Clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/", clienteController.getAll);

/**
 * @openapi
 * /clientes/{id}:
 *   get:
 *     summary: Busca cliente por ID
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */
router.get("/:id", clienteController.getById);

/**
 * @openapi
 * /clientes:
 *   post:
 *     summary: Cria um cliente
 *     tags:
 *       - Clientes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - email
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado
 *       400:
 *         description: Dados inválidos
 */
router.post("/", validate(ClienteSchema as any), clienteController.create);

/**
 * @openapi
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *       404:
 *         description: Cliente não encontrado
 */
router.put("/:id", validate(ClienteUpdateSchema as any), clienteController.update);

/**
 * @openapi
 * /clientes/{id}:
 *   delete:
 *     summary: Remove um cliente
 *     tags:
 *       - Clientes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente removido
 *       404:
 *         description: Cliente não encontrado
 */
router.delete("/:id", clienteController.delete);

export default router;
