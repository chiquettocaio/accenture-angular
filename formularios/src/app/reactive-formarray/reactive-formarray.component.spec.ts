import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormarrayComponent } from './reactive-formarray.component';

describe('ReactiveFormarrayComponent', () => {
  let component: ReactiveFormarrayComponent;
  let fixture: ComponentFixture<ReactiveFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
