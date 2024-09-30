import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgendamentoTransferenciaComponent } from './components/agendamento-transferencia/agendamento-transferencia.component';
import { ListarAgendamentosComponent } from './components/listar-agendamentos/listar-agendamentos.component';
import { ControleAgendamentoComponent } from './components/controle-agendamento/controle-agendamento.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    AgendamentoTransferenciaComponent,
    ListarAgendamentosComponent,
    ControleAgendamentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CurrencyMaskModule,
    MatSnackBarModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  providers: [
    MatDatepickerModule, 
  MatNativeDateModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }