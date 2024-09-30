import { Transferencia } from "./transferencia";

export interface PaginaTransferencia {
    content: Transferencia[]; 
    totalElements: number; 
    totalPages: number;  
    size: number;   
    number: number; 
  }
  