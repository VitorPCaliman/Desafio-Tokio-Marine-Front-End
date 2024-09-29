import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AgendamentoTransferenciaComponent } from './components/agendamento-transferencia/agendamento-transferencia.component';
import { ListarAgendamentosComponent } from './components/listar-agendamentos/listar-agendamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendamentoTransferenciaComponent,
    ListarAgendamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
