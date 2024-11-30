import {connectDB} from "../database";

export interface ControladorDeAcessoModel {
    nome: string;
    documento: string;
    matricula: string;
    usuario: string;
    senha: string;
}
