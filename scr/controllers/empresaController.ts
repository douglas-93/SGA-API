import {BaseController} from "./baseController";
import {EmpresaModel} from "../models/empresaModel";
import {empresaService} from "../services/empresaService";

export class EmpresaController extends BaseController<EmpresaModel>{
    constructor() {
        super(empresaService);
    }
}

export const empresaController = new EmpresaController();