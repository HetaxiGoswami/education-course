import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStructureComponent } from './basic-structure.component';

describe('BasicStructureComponent', () => {
  let component: BasicStructureComponent;
  let fixture: ComponentFixture<BasicStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
