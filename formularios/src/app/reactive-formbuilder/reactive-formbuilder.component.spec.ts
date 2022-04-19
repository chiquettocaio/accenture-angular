import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormbuilderComponent } from './reactive-formbuilder.component';

describe('ReactiveFormbuilderComponent', () => {
  let component: ReactiveFormbuilderComponent;
  let fixture: ComponentFixture<ReactiveFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
