import {BaseService} from "./baseService";
import {EmpresaModel} from "../models/empresaModel";

export class EmpresaService extends BaseService<EmpresaModel>{
    constructor() {
        super('empresas');
    }
}

export const empresaService = new EmpresaService();