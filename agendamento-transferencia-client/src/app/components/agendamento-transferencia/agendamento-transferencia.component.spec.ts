import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoTransferenciaComponent } from './agendamento-transferencia.component';

describe('AgendamentoTransferenciaComponent', () => {
  let component: AgendamentoTransferenciaComponent;
  let fixture: ComponentFixture<AgendamentoTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendamentoTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
