import { BaseService } from './baseService';
import { ControladorDeAcessoModel } from '../models/controladorDeAcessoModel';
import bcrypt from 'bcrypt';
import {connectDB} from "../database";

export class ControladorDeAcessoService extends BaseService<ControladorDeAcessoModel> {

    private SALT_ROUNDS = 10;

    constructor() {
        super('controladores_de_acesso');
    }

    // Função para criar o hash da senha
    private async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.SALT_ROUNDS);
        return await bcrypt.hash(password, salt);
    }

    // Função para comparar a senha inserida com o hash armazenado
    private async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    // Sobrescrever o método `add` para fazer o hash da senha
    // @ts-ignore
    async add(data: ControladorDeAcessoModel): Promise<ControladorDeAcessoModel> {
        // Realizar o hash da senha antes de salvar
        const hashedPassword = await this.hashPassword(data.senha);
        const newData = { ...data, senha: hashedPassword };

        // Chamar o método `add` da classe base
        const result = await super.add(newData);
        // Retornar o objeto sem a senha para maior segurança
        result.senha = '';
        return result;
    }

    // Método para autenticar um usuário (login)
    async authenticate(usuario: string, senha: string): Promise<ControladorDeAcessoModel | null> {
        // Buscar o usuário no banco de dados pelo campo `usuario`
        const db = await connectDB();
        const stmt = db.prepare(`SELECT * FROM controladores_de_acesso WHERE usuario = ?`);
        const user = <ControladorDeAcessoModel>stmt.get(usuario);

        if (user && await this.comparePassword(senha, user.senha)) {
            // Remover a senha do objeto antes de retornar
            user.senha = '';
            return user;
        }

        return null; // Retorna null se a autenticação falhar
    }

    // Método para inicializar um usuário administrador padrão
    async initializeAdminUser() {
        const db = await connectDB();
        const stmt = db.prepare(`SELECT * FROM controladores_de_acesso WHERE usuario = ?`);
        const adminUser = stmt.get('admin');

        // Se o usuário admin não existe, cria um com senha padrão
        if (!adminUser) {
            const defaultAdmin: ControladorDeAcessoModel = {
                nome: 'Administrador',
                documento: '00000000000',
                matricula: '0001',
                usuario: 'admin',
                senha: 'admin' // Recomendo mudar após o primeiro login
            };

            await this.add(defaultAdmin);
            console.log('Usuário administrador criado com sucesso.');
        } else {
            console.log('Usuário administrador já existe.');
        }
    }
}

export const controladorDeAcessoService = new ControladorDeAcessoService();