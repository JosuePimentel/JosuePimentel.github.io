import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToUpComponent } from './to-up.component';

describe('ToUpComponent', () => {
  let component: ToUpComponent;
  let fixture: ComponentFixture<ToUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
