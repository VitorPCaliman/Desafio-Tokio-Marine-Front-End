import { Component } from '@angular/core';

@Component({
  selector: 'app-controle-agendamento',
  templateUrl: './controle-agendamento.component.html',
  styleUrl: './controle-agendamento.component.css'
})
export class ControleAgendamentoComponent {
  showAgendar: boolean = true; // Controla a exibição do componente de agendamento

  toggleComponent() {
    this.showAgendar = !this.showAgendar; // Alterna entre os componentes
  }
}
