import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoEnCursoPage } from './pedido-en-curso.page';

describe('PedidoEnCursoPage', () => {
  let component: PedidoEnCursoPage;
  let fixture: ComponentFixture<PedidoEnCursoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEnCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
