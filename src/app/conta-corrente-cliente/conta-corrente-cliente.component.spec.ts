import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCorrenteClienteComponent } from './conta-corrente-cliente.component';

describe('ContaCorrenteClienteComponent', () => {
  let component: ContaCorrenteClienteComponent;
  let fixture: ComponentFixture<ContaCorrenteClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaCorrenteClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCorrenteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
