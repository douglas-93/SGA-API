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
    await createPessoaTable(); // Cria a tabela no início, se não existir
    console.log(`Server is running on http://localhost:${PORT}`);
});
