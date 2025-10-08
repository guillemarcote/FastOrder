import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KitchenDashboardPage } from './kitchen-dashboard.page';

describe('KitchenDashboardPage', () => {
  let component: KitchenDashboardPage;
  let fixture: ComponentFixture<KitchenDashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
