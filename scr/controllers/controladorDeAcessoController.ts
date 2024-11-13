import {BaseController} from "./baseController";
import {ControladorDeAcessoModel} from "../models/controladorDeAcessoModel";
import {controladorDeAcessoService} from "../services/controladorDeAcessoService";

class ControladorDeAcessoController extends BaseController<ControladorDeAcessoModel> {
    constructor() {
        super(controladorDeAcessoService);
    }
}

export const controladorDeAcessoController = new ControladorDeAcessoController();