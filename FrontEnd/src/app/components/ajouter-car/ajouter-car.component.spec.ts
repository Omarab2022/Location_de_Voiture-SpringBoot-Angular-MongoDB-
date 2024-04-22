import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCarComponent } from './ajouter-car.component';

describe('AjouterCarComponent', () => {
  let component: AjouterCarComponent;
  let fixture: ComponentFixture<AjouterCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
