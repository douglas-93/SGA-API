import Database from "better-sqlite3";


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
            entrada TEXT NOT NULL,
            saida TEXT,
            controladorId INTEGER NOT NULL,
            veiculoId INTEGER,
            pessoaId INTEGER,
            empresaId INTEGER,
            insercao TEXT,
            alteracao TEXT,
            FOREIGN KEY (controladorId) REFERENCES controladores_de_acesso(id),
            FOREIGN KEY (veiculoId) REFERENCES veiculos(id),
            FOREIGN KEY (pessoaId) REFERENCES pessoas(id),
            FOREIGN KEY (empresaId) REFERENCES empresas(id)
        );
    `);
}
