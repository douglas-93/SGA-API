import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import {createPessoaTable} from "./models/pessoaModel";
import veiculoRoutes from "./routes/veiculoRoutes";
import {createVeiculoTable} from "./models/veiculoModel";

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Rotas
app.use('/api', pessoaRoutes);
app.use('/api', veiculoRoutes);

// Iniciar o servidor
app.listen(PORT, async () => {
    await createPessoaTable(); // Cria base de dados, se não existir
    await createVeiculoTable();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
