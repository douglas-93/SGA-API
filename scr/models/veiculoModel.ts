import {connectDB} from "../database";

export interface VeiculoModel {
    id: number;
    placa: string;
    modelo: string;
}

export const createVeiculoTable = async () => {
    const db = await connectDB();
    db.exec(`
    CREATE TABLE IF NOT EXISTS veiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      placa TEXT NOT NULL,
      modelo TEXT
    );
  `);
};