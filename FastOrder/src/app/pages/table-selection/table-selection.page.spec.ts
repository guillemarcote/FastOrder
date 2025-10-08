import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableSelectionPage } from './table-selection.page';

describe('TableSelectionPage', () => {
  let component: TableSelectionPage;
  let fixture: ComponentFixture<TableSelectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
