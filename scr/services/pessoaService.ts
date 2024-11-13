import {BaseService} from "./baseService";
import {PessoaModel} from "../models/pessoaModel";

export class PessoaService extends BaseService<PessoaModel> {
    constructor() {
        super('pessoas');
    }
}

export const pessoaService = new PessoaService();