import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintContaReparacaoComponent } from './print-conta-reparacao.component';

describe('PrintContaReparacaoComponent', () => {
  let component: PrintContaReparacaoComponent;
  let fixture: ComponentFixture<PrintContaReparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintContaReparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintContaReparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
