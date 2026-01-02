// src/app.ts
import express from "express";
import cors from "cors";
import helmet from "helmet";
import clienteRoutes from "./routes/cliente.routes";
import estoqueRoutes from "./routes/estoque.routes";
import produtoRoutes from "./routes/produto.routes";
import vendaRoutes from "./routes/venda.routes";
import itensPedido from "./routes/itensPedido.routes";
import pedidoRoutes from "./routes/pedido.routes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";


const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/clientes", clienteRoutes);
app.use("/estoque", estoqueRoutes);
app.use("/produtos", produtoRoutes);
app.use("/vendas", vendaRoutes);
app.use("/itens-pedido", itensPedido);
app.use("/pedidos", pedidoRoutes);

export default app;
