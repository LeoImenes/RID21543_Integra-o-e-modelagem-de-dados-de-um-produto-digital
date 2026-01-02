<h1>Backend – API de Pedidos 🧾</h1>

  <p>
    Backend desenvolvido em <strong>Node.js + TypeScript</strong> para gerenciamento de
    <strong>Clientes, Produtos, Estoque, Pedidos e Vendas</strong>,
    utilizando <strong>Express</strong>, <strong>Prisma ORM</strong>,
    <strong>SQLite</strong> e <strong>Swagger</strong>.
  </p>

  <hr />

  <h2>🛠️ Tecnologias</h2>
  <ul>
    <li>Node.js</li>
    <li>TypeScript</li>
    <li>Express 5</li>
    <li>Prisma ORM</li>
    <li>SQLite</li>
    <li>Zod</li>
    <li>Swagger (swagger-jsdoc + swagger-ui)</li>
    <li>Helmet e CORS</li>
  </ul>

  <hr />

  <h2>📁 Estrutura do Projeto</h2>

  <pre>
src/
├── controllers/     Controllers (Request / Response)
├── services/        Regras de negócio e Prisma
├── routes/          Rotas da aplicação
├── middlewares/     Validações e middlewares
├── prisma/          Client Prisma
├── swagger.ts       Configuração do Swagger
└── server.ts        Inicialização do servidor
  </pre>

  <hr />

  <h2>⚙️ Pré-requisitos</h2>
  <ul>
    <li>Node.js >= 18</li>
    <li>NPM ou Yarn</li>
  </ul>

  <hr />

  <h2>🚀 Instalação e Execução</h2>

  <h3>1️⃣ Instalar dependências</h3>
  <pre>
npm install
# ou
yarn install
  </pre>

  <h3>2️⃣ Configurar variáveis de ambiente</h3>
  <p>Crie um arquivo <code>.env</code> na raiz do projeto:</p>

  <pre>
DATABASE_URL="file:./dev.db"
  </pre>

  <h3>3️⃣ Gerar banco e Prisma Client</h3>
  <pre>
npx prisma generate
npx prisma migrate dev
  </pre>

  <h3>4️⃣ Rodar o projeto</h3>
  <pre>
npm run dev
# ou
yarn dev
  </pre>

  <p>
    O servidor será iniciado em:
    <br />
    <strong>http://localhost:3000</strong>
  </p>

  <hr />

  <h2>📚 Documentação da API (Swagger)</h2>
  <p>
    Após iniciar o projeto, acesse:
  </p>

  <pre>
http://localhost:3000/docs
  </pre>

  <p>
    No Swagger você encontrará:
  </p>

  <ul>
    <li>Lista de endpoints</li>
    <li>Modelos de requisição e resposta</li>
    <li>Testes diretos via interface web</li>
  </ul>

  <hr />

  <h2>🧩 Modelos do Banco de Dados</h2>

  <h3>Cliente</h3>
  <ul>
    <li>Possui vários pedidos</li>
    <li>Email e CPF únicos</li>
  </ul>

  <h3>Produtos</h3>
  <ul>
    <li>Relacionamento 1:1 com Estoque</li>
    <li>Relacionamento 1:N com ItensPedido</li>
  </ul>

  <h3>Estoque</h3>
  <ul>
    <li>Um estoque por produto</li>
    <li>Controle de quantidade</li>
  </ul>

  <h3>Pedido</h3>
  <ul>
    <li>Relacionado a um cliente</li>
    <li>Possui vários itens</li>
    <li>Pode gerar uma venda</li>
  </ul>

  <h3>Venda</h3>
  <ul>
    <li>Relacionamento 1:1 com Pedido</li>
    <li>Armazena data e valor total</li>
  </ul>

  <hr />

  <h2>🔄 Arquitetura</h2>
  <ul>
    <li><strong>Controller:</strong> lida com Request e Response</li>
    <li><strong>Service:</strong> regras de negócio e banco de dados</li>
    <li><strong>Routes:</strong> definição das rotas</li>
    <li><strong>Middleware:</strong> validações com Zod</li>
  </ul>

  <hr />

  <h2>📄 Scripts</h2>
  <pre>
"dev": "ts-node-dev --respawn --transpile-only src/server.ts"
  </pre>

  <hr />

  <h2>📌 Licença</h2>
  <p>
    Este projeto está licenciado sob a licença <strong>MIT</strong>.
  </p>
