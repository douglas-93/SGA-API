import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import veiculoRoutes from "./routes/veiculoRoutes";
import controladorDeAcessoRoutes from "./routes/controladorDeAcessoRoutes";
import empresaRoutes from "./routes/empresaRoutes";
import {createDataBase} from "./database";
import {controladorDeAcessoService} from "./services/controladorDeAcessoService";

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Rotas
app.use('/api', pessoaRoutes);
app.use('/api', veiculoRoutes);
app.use('/api', controladorDeAcessoRoutes);
app.use('/api', empresaRoutes);

// Iniciar o servidor
app.listen(PORT, async () => {
    await createDataBase();
    await controladorDeAcessoService.initializeAdminUser();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
