import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesreparacaoComponent } from './detalhesreparacao.component';

describe('DetalhesreparacaoComponent', () => {
  let component: DetalhesreparacaoComponent;
  let fixture: ComponentFixture<DetalhesreparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesreparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
