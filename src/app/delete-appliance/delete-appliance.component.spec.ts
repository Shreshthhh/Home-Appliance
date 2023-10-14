import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApplianceComponent } from './delete-appliance.component';

describe('DeleteApplianceComponent', () => {
  let component: DeleteApplianceComponent;
  let fixture: ComponentFixture<DeleteApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteApplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
