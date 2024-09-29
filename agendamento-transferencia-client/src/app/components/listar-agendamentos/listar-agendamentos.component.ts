import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-listar-agendamentos',
  templateUrl: './listar-agendamentos.component.html',
  styleUrls: ['./listar-agendamentos.component.css']
})
export class ListarAgendamentosComponent implements OnInit {
  agendamentos: Transferencia[] = [];

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.carregarAgendamentos();
  }

  carregarAgendamentos(): void {
    this.transferenciaService.listarAgendamentos().subscribe(
      data => {
        this.agendamentos = data;
        console.log('Agendamentos carregados:', this.agendamentos);
      },
      error => {
        console.error('Erro ao carregar agendamentos', error);
      }
    );
  }
}