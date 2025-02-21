import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostadetailsComponent } from './propostadetails.component';

describe('PropostadetailsComponent', () => {
  let component: PropostadetailsComponent;
  let fixture: ComponentFixture<PropostadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostadetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropostadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
