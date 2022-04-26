import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableCompComponent } from './observable-comp.component';

describe('ObservableCompComponent', () => {
  let component: ObservableCompComponent;
  let fixture: ComponentFixture<ObservableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
