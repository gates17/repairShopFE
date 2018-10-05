import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarreparacaoComponent } from './eliminarreparacao.component';

describe('EliminarreparacaoComponent', () => {
  let component: EliminarreparacaoComponent;
  let fixture: ComponentFixture<EliminarreparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarreparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
