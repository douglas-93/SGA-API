export interface AcessoModel {
    id?: number;
    dataHoraEntrada: string; // 'YYYY-MM-DD HH:MM:SS'
    dataHoraSaida?: string; // 'YYYY-MM-DD HH:MM:SS'
    controladorId: number;
    veiculoId?: number;
    pessoaId?: number;
    empresaId?: number;
    dataHoraInsercao: string; // 'YYYY-MM-DD HH:MM:SS'
    dataHoraAlteracao: string; // 'YYYY-MM-DD HH:MM:SS'
}
