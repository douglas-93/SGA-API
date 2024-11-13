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

// Função para adicionar uma nova pessoa
export const addPessoa = async (pessoa: PessoaModel) => {
    const db = await connectDB();
    const stmt = db.prepare('INSERT INTO pessoas (nome, documento) VALUES (?, ?)');
    const result = stmt.run(pessoa.nome, pessoa.documento);
    return { id: result.lastInsertRowid, ...pessoa };
};

// Função para obter todas as pessoas
export const getPessoas = async () => {
    const db = await connectDB();
    const stmt = db.prepare('SELECT * FROM pessoas');
    return stmt.all();
};

// Função para atualizar uma pessoa
export const upPessoa = async (id: number, pessoa: Partial<PessoaModel>) => {
    const db = await connectDB();
    const fields = Object.keys(pessoa).map(key => `${key} = ?`).join(', ');
    const values = Object.values(pessoa);
    const query = `UPDATE pessoas SET ${fields} WHERE id = ?`;
    const stmt = db.prepare(query);
    const result = stmt.run(...values, id);
    return result.changes > 0;
};

// Função para deletar uma pessoa
export const delPessoa = async (id: number) => {
    const db = await connectDB();
    const stmt = db.prepare('DELETE FROM pessoas WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
};