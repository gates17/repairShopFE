import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintreparacaoComponent } from './printreparacao.component';

describe('PrintreparacaoComponent', () => {
  let component: PrintreparacaoComponent;
  let fixture: ComponentFixture<PrintreparacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintreparacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintreparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
