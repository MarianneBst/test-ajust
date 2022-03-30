import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGaugeComponent } from './main-gauge.component';

describe('GaugeComponent', () => {
  let component: MainGaugeComponent;
  let fixture: ComponentFixture<MainGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
