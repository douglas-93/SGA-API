import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import veiculoRoutes from "./routes/veiculoRoutes";
import controladorDeAcessoRoutes from "./routes/controladorDeAcessoRoutes";
import empresaRoutes from "./routes/empresaRoutes";
import {createDataBase} from "./database";
import {controladorDeAcessoService} from "./services/controladorDeAcessoService";
import cors from 'cors';
import acessoRoutes from './routes/acessoRoutes';

const app = express();
const PORT = 5000;

// Middleware para analisar JSON
app.use(express.json());
app.use(cors())

// Rotas
app.use('/api', pessoaRoutes);
app.use('/api', veiculoRoutes);
app.use('/api', controladorDeAcessoRoutes);
app.use('/api', empresaRoutes);
app.use('/api', acessoRoutes);

// Iniciar o servidor
app.listen(PORT, async () => {
    await createDataBase();
    await controladorDeAcessoService.initializeAdminUser();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
