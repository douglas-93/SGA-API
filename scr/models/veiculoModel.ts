import {connectDB} from "../database";

export interface VeiculoModel {
    id: number;
    placa: string;
    modelo: string;
}

export const createVeiculoTable = () => {
    const db = connectDB();
    db.exec(`
    CREATE TABLE IF NOT EXISTS veiculos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      placa TEXT,
      modelo TEXT
    );
  `);
};