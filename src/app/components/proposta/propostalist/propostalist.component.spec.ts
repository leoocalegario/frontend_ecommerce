import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostalistComponent } from './propostalist.component';

describe('PropostalistComponent', () => {
  let component: PropostalistComponent;
  let fixture: ComponentFixture<PropostalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropostalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
