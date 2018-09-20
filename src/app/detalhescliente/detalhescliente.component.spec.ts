import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesclienteComponent } from './detalhescliente.component';

describe('DetalhesclienteComponent', () => {
  let component: DetalhesclienteComponent;
  let fixture: ComponentFixture<DetalhesclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
