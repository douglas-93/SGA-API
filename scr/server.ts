import express from 'express';
import pessoaRoutes from "./routes/pessoaRoutes";
import {createPessoaTable} from "./models/pessoaModel";
import veiculoRoutes from "./routes/veiculoRoutes";
import {createVeiculoTable} from "./models/veiculoModel";
import controladorDeAcessoRoutes from "./routes/controladorDeAcessoRoutes";
import {createControladorDeAcessoTable} from "./models/controladorDeAcessoModel";
import {controladorDeAcessoService} from "./services/controladorDeAcessoService";
import {createEmpresaTable} from "./models/empresaModel";
import empresaRoutes from "./routes/empresaRoutes";

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
    await createPessoaTable(); // Cria base de dados, se não existir
    await createVeiculoTable();
    await createControladorDeAcessoTable();
    await controladorDeAcessoService.initializeAdminUser();
    await createEmpresaTable();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
