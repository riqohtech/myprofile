import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashFormsComponent } from './dash-forms.component';

describe('DashFormsComponent', () => {
  let component: DashFormsComponent;
  let fixture: ComponentFixture<DashFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
