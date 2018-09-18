import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairedTableComponent } from './repaired-table.component';

describe('RepairedTableComponent', () => {
  let component: RepairedTableComponent;
  let fixture: ComponentFixture<RepairedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
