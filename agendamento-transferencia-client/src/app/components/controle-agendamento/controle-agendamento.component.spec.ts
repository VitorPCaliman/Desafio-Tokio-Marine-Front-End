import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleAgendamentoComponent } from './controle-agendamento.component';

describe('ControleAgendamentoComponent', () => {
  let component: ControleAgendamentoComponent;
  let fixture: ComponentFixture<ControleAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
