import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosviewComponent } from './carrosview.component';

describe('CarrosviewComponent', () => {
  let component: CarrosviewComponent;
  let fixture: ComponentFixture<CarrosviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
