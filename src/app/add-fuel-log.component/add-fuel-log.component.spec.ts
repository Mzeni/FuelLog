import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelLogComponent } from './add-fuel-log.component';

describe('AddFuelLogComponent', () => {
  let component: AddFuelLogComponent;
  let fixture: ComponentFixture<AddFuelLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFuelLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFuelLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
