import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldRateComponent } from './gold-rate.component';

describe('GoldRateComponent', () => {
  let component: GoldRateComponent;
  let fixture: ComponentFixture<GoldRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
