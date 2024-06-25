import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsNoRelacionadoComponent } from './cards-no-relacionado.component';

describe('CardsNoRelacionadoComponent', () => {
  let component: CardsNoRelacionadoComponent;
  let fixture: ComponentFixture<CardsNoRelacionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsNoRelacionadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsNoRelacionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
