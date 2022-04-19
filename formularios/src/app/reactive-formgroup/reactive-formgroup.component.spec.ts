import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormgroupComponent } from './reactive-formgroup.component';

describe('ReactiveFormgroupComponent', () => {
  let component: ReactiveFormgroupComponent;
  let fixture: ComponentFixture<ReactiveFormgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
