import { connectDB } from '../database';

export interface PessoaModel {
    id?: number;
    nome: string;
    documento: string;
}

// Função para criar a tabela se não existir
export const createPessoaTable = async () => {
    const db = await connectDB();
    await db.exec(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      documento TEXT
    );
  `);
};
