import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleDistanceComponent } from './flexible-distance.component';

describe('FlexibleDistanceComponent', () => {
  let component: FlexibleDistanceComponent;
  let fixture: ComponentFixture<FlexibleDistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexibleDistanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexibleDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
