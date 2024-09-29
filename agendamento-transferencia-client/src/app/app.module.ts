import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgendamentoTransferenciaComponent } from './components/agendamento-transferencia/agendamento-transferencia.component';
import { ListarAgendamentosComponent } from './components/listar-agendamentos/listar-agendamentos.component';
import { ControleAgendamentoComponent } from './components/controle-agendamento/controle-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoTransferenciaComponent,
    ListarAgendamentosComponent,
    ControleAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }