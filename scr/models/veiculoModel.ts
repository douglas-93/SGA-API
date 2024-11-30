import {connectDB} from "../database";

export interface VeiculoModel {
    id: number;
    placa: string;
    modelo: string;
}