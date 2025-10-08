import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

// Modelo simplificado para el estado
interface ItemEstado {
  nombre: string;
  cantidad: number;
  estado: 'pendiente' | 'en_preparacion' | 'servido';
  subtotal: number;
}

@Component({
  selector: 'app-pedido-en-curso',
  templateUrl: './pedido-en-curso.page.html',
  styleUrls: ['./pedido-en-curso.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PedidoEnCursoPage implements OnInit {

  mesaId: number;
  itemsActuales: ItemEstado[] = [];

  // Getters
  get totalPedido(): number {
    return this.itemsActuales.reduce((sum, item) => sum + item.subtotal, 0);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.mesaId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.cargarEstadoPedidoSimulado();
  }

  cargarEstadoPedidoSimulado() {
    // Simulación de un pedido ya enviado a cocina
    this.itemsActuales = [
      { nombre: 'Hamburguesa Clásica', cantidad: 2, estado: 'servido', subtotal: 11000 },
      { nombre: 'Lomo Saltado', cantidad: 1, estado: 'en_preparacion', subtotal: 8000 },
      { nombre: 'Papas Fritas', cantidad: 1, estado: 'servido', subtotal: 1500 },
      { nombre: 'Coca-Cola', cantidad: 3, estado: 'servido', subtotal: 2400 },
    ];
  }

  // Permite al mozo volver a la pantalla de pedido para agregar más ítems
  agregarMasItems() {
    this.router.navigate(['/pedido', this.mesaId]);
  }

  // Simula el cierre de la mesa y la solicitud de factura
  solicitarFactura() {
    console.log(`Solicitando factura para Mesa ${this.mesaId}`);
    // Aquí iría la lógica para cambiar el estado de la mesa a 'pendiente_pago'
    alert(`Factura generada para Mesa ${this.mesaId}. Total: $${this.totalPedido}`);
    
    // Opcional: Navegar a una pantalla de pago o volver a la selección de mesa
    this.router.navigate(['/table-selection']);
  }

  // Define el color del ítem basado en su estado
  getColorEstado(estado: ItemEstado['estado']): string {
    switch (estado) {
      case 'servido':
        return 'success'; // Verde para servido
      case 'en_preparacion':
        return 'warning'; // Amarillo para en preparación
      case 'pendiente':
        return 'danger'; // Rojo/gris para pendiente
      default:
        return 'medium';
    }
  }
}