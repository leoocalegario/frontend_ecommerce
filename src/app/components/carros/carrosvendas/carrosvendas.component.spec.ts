import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosvendasComponent } from './carrosvendas.component';

describe('CarrosvendasComponent', () => {
  let component: CarrosvendasComponent;
  let fixture: ComponentFixture<CarrosvendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosvendasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrosvendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
