import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairingTableComponent } from './repairing-table.component';

describe('RepairingTableComponent', () => {
  let component: RepairingTableComponent;
  let fixture: ComponentFixture<RepairingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
