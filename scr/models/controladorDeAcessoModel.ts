import {connectDB} from "../database";

export interface ControladorDeAcessoModel {
    nome: string;
    documento: string;
    matricula: string;
    usuario: string;
    senha: string;
}

export const createControladorDeAcessoTable = async () => {
    const db = await connectDB();
    db.exec(`
    CREATE TABLE IF NOT EXISTS controladores_de_acesso (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      documento TEXT,
      matricula TEXT,
      usuario TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    );
  `);
};
