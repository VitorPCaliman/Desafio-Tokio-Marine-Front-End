export interface Transferencia {
    id?: number;
    contaOrigem: string;
    contaDestino: string;
    valorTransferencia: number;
    dataAgendamento?: Date;
    dataTransferencia: Date;
    taxa?: number;
  }