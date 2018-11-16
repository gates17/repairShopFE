import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaReparacaoComponent } from './conta-reparacao.component';

describe('ContaReparacaoComponent', () => {
  let component: ContaReparacaoComponent;
  let fixture: ComponentFixture<ContaReparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaReparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaReparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
