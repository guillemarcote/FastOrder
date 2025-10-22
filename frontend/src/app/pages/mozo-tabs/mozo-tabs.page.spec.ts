import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MozoTabsPage } from './mozo-tabs.page';

describe('MozoTabsPage', () => {
  let component: MozoTabsPage;
  let fixture: ComponentFixture<MozoTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MozoTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
