import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarclienteComponent } from './alterarcliente.component';

describe('AlterarclienteComponent', () => {
  let component: AlterarclienteComponent;
  let fixture: ComponentFixture<AlterarclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
