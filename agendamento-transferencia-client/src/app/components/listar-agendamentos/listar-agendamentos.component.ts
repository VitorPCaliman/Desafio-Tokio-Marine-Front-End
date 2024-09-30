import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { TransferenciaService } from '../../services/transferencia.service';
import { PageEvent } from '@angular/material/paginator';
import { PaginaTransferencia } from '../../models/paginacao';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css']
})
export class ListarAgendamentosComponent implements OnInit {
  agendamentos: Transferencia[] = []; // Todos os agendamentos
  paginatedDataSource: Transferencia[] = []; // Dados da página atual
  pageSize: number = 10; // Tamanho da página padrão
  pageIndex: number = 0; // Índice da página atual
  totalElements: number = 0; // Total de elementos

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  carregarAgendamentos(): void {
    const page = this.pageIndex; 
    const size = this.pageSize; 

    this.transferenciaService.listarAgendamentos(page, size).subscribe(
      (data: PaginaTransferencia) => {
        this.agendamentos = data.content; // Acessa a propriedade 'content'
        this.totalElements = data.totalElements; // Atualiza o total de elementos
        this.paginateData(); // Chama a função para paginar os dados
      },
      error => {
        console.error('Erro ao carregar agendamentos', error);
      }
    );
  }

  // Função para paginar os dados
  paginateData(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedDataSource = this.agendamentos.slice(startIndex, startIndex + this.pageSize);
  }

  // Evento de mudança de página
  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize; // Atualiza o tamanho da página
    this.pageIndex = event.pageIndex; // Atualiza o índice da página
    this.carregarAgendamentos(); // Recarrega os agendamentos da nova página
  }
}