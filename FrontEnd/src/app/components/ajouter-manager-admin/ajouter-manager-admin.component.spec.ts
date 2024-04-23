import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterManagerAdminComponent } from './ajouter-manager-admin.component';

describe('AjouterManagerAdminComponent', () => {
  let component: AjouterManagerAdminComponent;
  let fixture: ComponentFixture<AjouterManagerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterManagerAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterManagerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
