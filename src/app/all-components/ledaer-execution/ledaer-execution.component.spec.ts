import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedaerExecutionComponent } from './ledaer-execution.component';

describe('LedaerExecutionComponent', () => {
  let component: LedaerExecutionComponent;
  let fixture: ComponentFixture<LedaerExecutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LedaerExecutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LedaerExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
