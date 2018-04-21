import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallMapComponent } from './hall-map.component';

describe('HallMapComponent', () => {
  let component: HallMapComponent;
  let fixture: ComponentFixture<HallMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
