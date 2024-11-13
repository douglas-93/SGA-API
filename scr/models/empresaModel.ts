import {connectDB} from "../database";

export interface EmpresaModel {
    nome: string;
    cnpj: string;
}

export const createEmpresaTable = async () => {
    const db = await connectDB();
    db.exec(`
    CREATE TABLE IF NOT EXISTS empresas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cnpj TEXT
    );
  `);
};