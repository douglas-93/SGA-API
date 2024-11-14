import Database from "better-sqlite3";
import {controladorDeAcessoService} from "./services/controladorDeAcessoService";


const db = new Database('./database.sqlite');

export const connectDB = () => {
    return db;
};

export const createDataBase = async () => {
    console.log('Verificando estrutura do banco ...')
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

    db.exec(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      documento TEXT
    );
  `);

    db.exec(`
    CREATE TABLE IF NOT EXISTS veiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      placa TEXT NOT NULL,
      modelo TEXT
    );
  `);

    db.exec(`
    CREATE TABLE IF NOT EXISTS empresas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cnpj TEXT
    );
  `);

    db.exec(`
        CREATE TABLE IF NOT EXISTS acessos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data_hora_entrada TEXT NOT NULL,
            data_hora_saida TEXT,
            controlador_id INTEGER NOT NULL,
            veiculo_id INTEGER,
            pessoa_id INTEGER,
            empresa_id INTEGER,
            data_hora_insercao TEXT,
            data_hora_alteracao TEXT,
            FOREIGN KEY (controlador_id) REFERENCES controladores_de_acesso(id),
            FOREIGN KEY (veiculo_id) REFERENCES veiculos(id),
            FOREIGN KEY (pessoa_id) REFERENCES pessoas(id),
            FOREIGN KEY (empresa_id) REFERENCES empresas(id)
        );
    `);
}
