import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarreparacaoComponent } from './criarreparacao.component';

describe('CriarreparacaoComponent', () => {
  let component: CriarreparacaoComponent;
  let fixture: ComponentFixture<CriarreparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarreparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
