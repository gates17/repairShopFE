import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintContaCorrenteClienteComponent } from './print-conta-corrente-cliente.component';

describe('PrintContaCorrenteClienteComponent', () => {
  let component: PrintContaCorrenteClienteComponent;
  let fixture: ComponentFixture<PrintContaCorrenteClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintContaCorrenteClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintContaCorrenteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
