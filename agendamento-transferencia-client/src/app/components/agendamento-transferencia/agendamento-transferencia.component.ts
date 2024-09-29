import { Component } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { TransferenciaService } from '../../services/transferencia.service';

@Component({
  selector: 'app-agendamento-transferencia',
  templateUrl: './agendamento-transferencia.component.html',
  styleUrls: ['./agendamento-transferencia.component.css']
})
export class AgendamentoTransferenciaComponent {
  transferencia: Transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valorTransferencia: 0,
    dataTransferencia: new Date()
  };

  constructor(private transferenciaService: TransferenciaService) {}

  agendarTransferencia() {
    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
      response => {
        alert('Transferência agendada com sucesso!');
      },
      error => {
        alert('Erro ao agendar transferência.');
      }
    );
  }
}
