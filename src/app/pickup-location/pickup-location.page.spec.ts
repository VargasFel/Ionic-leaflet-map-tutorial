import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupLocationPage } from './pickup-location.page';

describe('PickupLocationPage', () => {
  let component: PickupLocationPage;
  let fixture: ComponentFixture<PickupLocationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PickupLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
