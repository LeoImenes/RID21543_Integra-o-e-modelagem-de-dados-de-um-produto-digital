import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Pedidos",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [
      { url: "http://localhost:3000" },
    ]
  },
  apis: ["./src/routes/*.ts"],
   // onde ficam as rotas
});
