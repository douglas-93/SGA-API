import {BaseController} from "./baseController";
import {VeiculoModel} from "../models/veiculoModel";
import {veiculoService} from "../services/veiculoService";

class VeiculoController extends BaseController<VeiculoModel> {
    constructor() {
        super(veiculoService);
    }
}

export const veiculoController = new VeiculoController();