import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoRoundedComponent } from './photo-rounded.component';

describe('PhotoRoundedComponent', () => {
  let component: PhotoRoundedComponent;
  let fixture: ComponentFixture<PhotoRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoRoundedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
