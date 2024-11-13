import {BaseController} from "./baseController";
import {PessoaModel} from "../models/pessoaModel";
import {pessoaService} from "../services/pessoaService";

class PessoaController extends BaseController<PessoaModel> {
    constructor() {
        super(pessoaService);
    }
}

export const pessoaController = new PessoaController();