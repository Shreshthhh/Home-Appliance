import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplianceComponent } from './update-appliance.component';

describe('UpdateApplianceComponent', () => {
  let component: UpdateApplianceComponent;
  let fixture: ComponentFixture<UpdateApplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateApplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
