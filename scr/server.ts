import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import {createPessoaTable} from "./models/pessoaModel";

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Rotas
app.use('/api', pessoaRoutes);

// Iniciar o servidor
app.listen(PORT, async () => {
    await createPessoaTable(); // Cria base de dados, se não existir
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
