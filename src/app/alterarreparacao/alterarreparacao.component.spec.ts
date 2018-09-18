import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarreparacaoComponent } from './alterarreparacao.component';

describe('AlterarreparacaoComponent', () => {
  let component: AlterarreparacaoComponent;
  let fixture: ComponentFixture<AlterarreparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarreparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
