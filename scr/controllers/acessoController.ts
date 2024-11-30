import {BaseController} from "./baseController";
import {AcessoModel} from "../models/acessoModel";
import {acessoService} from "../services/acessoService";

export class AcessoController extends BaseController<AcessoModel>{
    constructor() {
        super(acessoService);
    }
}

export const acessoController = new AcessoController();