import { Component } from '@angular/core';
import { Transferencia } from '../../models/transferencia';
import { TransferenciaService } from '../../services/transferencia.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agendamento-transferencia',
  templateUrl: './agendamento-transferencia.component.html',
  styleUrls: ['./agendamento-transferencia.component.css'],
})
export class AgendamentoTransferenciaComponent {
  transferencia: Transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valorTransferencia: 0,
    dataTransferencia: new Date()
  };

  loading: boolean = false;
  minDate: Date = new Date();

  constructor(private transferenciaService: TransferenciaService, private snackBar: MatSnackBar) {}

  agendarTransferencia() {
    if (this.transferencia.valorTransferencia <= 0) {
      this.openSnackBar('O valor da transferência deve ser positivo.', 'Erro');
      return;
    }

    this.loading = true; // Ativa o spinner

    this.transferenciaService.agendarTransferencia(this.transferencia).subscribe(
      response => {
        this.openSnackBar('Transferência agendada com sucesso!', 'Sucesso');
        this.removeSpinnerAfterDelay();
      },
      error => {
        this.loading = false;
        if (error.status === 400 && error.error === 'Data inválida para transferência. Não há taxa aplicável para datas acima de 50 dias.') {
          this.openSnackBar('Data inválida. Não há taxa aplicável para a data selecionada acima de 50 dias.', 'Erro');
        } else {
          this.openSnackBar('Erro ao agendar transferência.', 'Erro');
        }
      }
    );
  }

  openSnackBar(message: string, action: string) {
    let icon = action === 'Erro' ? '🚫' : '✅';
    this.snackBar.open(`${icon} ${message}`, action, {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: action === 'Erro' ? ['snackbar-error'] : ['snackbar-success'],
    });
  }

  removeSpinnerAfterDelay() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
