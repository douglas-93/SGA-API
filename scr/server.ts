import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import {createPessoaTable} from "./models/pessoaModel";
import veiculoRoutes from "./routes/veiculoRoutes";
import {createVeiculoTable} from "./models/veiculoModel";
import controladorDeAcessoRoutes from "./routes/controladorDeAcessoRoutes";
import {createControladorDeAcessoTable} from "./models/controladorDeAcessoModel";
import {controladorDeAcessoService} from "./services/controladorDeAcessoService";
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware para analisar JSON
app.use(express.json());
app.use(cors())

// Rotas
app.use('/api', pessoaRoutes);
app.use('/api', veiculoRoutes);
app.use('/api', controladorDeAcessoRoutes)

// Iniciar o servidor
app.listen(PORT, async () => {
    await createPessoaTable(); // Cria base de dados, se não existir
    await createVeiculoTable();
    await createControladorDeAcessoTable();
    await controladorDeAcessoService.initializeAdminUser();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
