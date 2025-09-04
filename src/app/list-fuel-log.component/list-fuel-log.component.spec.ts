import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuelLogComponent } from './list-fuel-log.component';

describe('ListFuelLogComponent', () => {
  let component: ListFuelLogComponent;
  let fixture: ComponentFixture<ListFuelLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFuelLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFuelLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
