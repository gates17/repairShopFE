import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparacaoListComponent } from './reparacao-list.component';

describe('ReparacaoListComponent', () => {
  let component: ReparacaoListComponent;
  let fixture: ComponentFixture<ReparacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
