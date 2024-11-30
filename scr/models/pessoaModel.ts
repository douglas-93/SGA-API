import { connectDB } from '../database';

export interface PessoaModel {
    id?: number;
    nome: string;
    documento: string;
}
