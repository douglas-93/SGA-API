export interface AcessoModel {
    id?: number;
    entrada: string; // 'YYYY-MM-DD HH:MM:SS'
    saida?: string; // 'YYYY-MM-DD HH:MM:SS'
    controladorId: number;
    veiculoId?: number;
    pessoaId?: number;
    empresaId?: number;
    insercao: string; // 'YYYY-MM-DD HH:MM:SS'
    alteracao?: string; // 'YYYY-MM-DD HH:MM:SS'
}
