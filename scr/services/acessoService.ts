import {BaseService} from "./baseService";
import {AcessoModel} from "../models/acessoModel";

export class AcessoService extends BaseService<AcessoModel>{
    constructor() {
        super('acessos');
    }
}

export const acessoService = new AcessoService();