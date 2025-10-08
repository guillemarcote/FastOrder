import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockAdminPage } from './stock-admin.page';

describe('StockAdminPage', () => {
  let component: StockAdminPage;
  let fixture: ComponentFixture<StockAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
