import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsExperienciaComponent } from './cards-experiencia.component';

describe('CardsExperienciaComponent', () => {
  let component: CardsExperienciaComponent;
  let fixture: ComponentFixture<CardsExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsExperienciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
