import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintClienteComponent } from './print-cliente.component';

describe('PrintClienteComponent', () => {
  let component: PrintClienteComponent;
  let fixture: ComponentFixture<PrintClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
