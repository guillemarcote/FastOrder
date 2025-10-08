import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Definimos la estructura de un item de cocina (puede ser todo un pedido o un item específico)
interface PedidoCocina {
  id: number;
  mesa: number;
  hora: string;
  estado: 'nuevo' | 'en_preparacion' | 'listo';
  items: { nombre: string; cantidad: number; notas?: string }[];
}

// Define la estructura de una columna del tablero (Kanban)
interface ColumnaEstado {
  estado: 'nuevo' | 'en_preparacion' | 'listo'; // ¡El tipo estricto es clave!
  titulo: string;
  color: string;
}

// ... (Resto del componente PedidoCocina)

@Component({
  selector: 'app-kitchen-dashboard',
  templateUrl: './kitchen-dashboard.page.html',
  styleUrls: ['./kitchen-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class KitchenDashboardPage implements OnInit {

  // Almacenaremos los pedidos en una única lista
  pedidos: PedidoCocina[] = [];

  // Categorías para las columnas (Kanban)
  columnas: ColumnaEstado[] = [ // <-- AÑADE EL TIPO ColumnaEstado[] AQUÍ
    { estado: 'nuevo', titulo: 'Nuevos Pedidos', color: 'danger' },
    { estado: 'en_preparacion', titulo: 'En Preparación', color: 'warning' },
    { estado: 'listo', titulo: '¡Listo para Entregar!', color: 'success' },
  ];

  constructor() { }

  ngOnInit() {
    this.cargarPedidosSimulados();
  }

  cargarPedidosSimulados() {
    // En la realidad, esto sería un servicio de tiempo real (WebSockets, Firebase, etc.)
    this.pedidos = [
      { id: 5, mesa: 3, hora: '10:45', estado: 'nuevo', items: [{ nombre: 'Lomo Saltado', cantidad: 1 }, { nombre: 'Papas Fritas', cantidad: 1 }] },
      { id: 4, mesa: 1, hora: '10:30', estado: 'en_preparacion', items: [{ nombre: 'Hamburguesa Clásica', cantidad: 2, notas: 'Sin cebolla' }] },
      { id: 3, mesa: 7, hora: '10:00', estado: 'listo', items: [{ nombre: 'Agua Mineral', cantidad: 3 }] },
    ];
  }

  getPedidosPorEstado(estado: PedidoCocina['estado']): PedidoCocina[] {
    return this.pedidos.filter(p => p.estado === estado);
  }

  /**
   * Mueve un pedido al siguiente estado en la cadena.
   */
  avanzarEstado(pedido: PedidoCocina) {
    switch (pedido.estado) {
      case 'nuevo':
        pedido.estado = 'en_preparacion';
        break;
      case 'en_preparacion':
        pedido.estado = 'listo';
        break;
      case 'listo':
        // En la vida real, un pedido "listo" se eliminaría de esta lista y se notificaría al mozo.
        this.eliminarPedido(pedido.id); 
        break;
    }
  }

  eliminarPedido(id: number) {
    this.pedidos = this.pedidos.filter(p => p.id !== id);
    this.cargarPedidosSimulados(); // Recargar para simular datos frescos.
  }

  // Permite al mozo volver a la pantalla de pedido para agregar más ítems
  iniciarSesionCocina() {
    // Simular el login de Cocina
    this.cargarPedidosSimulados();
  }
}