import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormcontrolComponent } from './reactive-formcontrol.component';

describe('ReactiveFormcontrolComponent', () => {
  let component: ReactiveFormcontrolComponent;
  let fixture: ComponentFixture<ReactiveFormcontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormcontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
