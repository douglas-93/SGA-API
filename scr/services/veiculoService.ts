import {BaseService} from "./baseService";
import {VeiculoModel} from "../models/veiculoModel";

export class VeiculoService extends BaseService<VeiculoModel> {
    constructor() {
        super('veiculos');
    }
}

export const veiculoService = new VeiculoService();