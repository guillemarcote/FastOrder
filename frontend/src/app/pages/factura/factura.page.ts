// src/app/pages/factura/factura.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonLabel, 
  IonList, 
  IonItem, 
  IonText, 
  IonButton, 
  IonFooter, 
  NavController // Para navegación programática
} from '@ionic/angular/standalone';

// Interfaz para un ítem del pedido
interface PedidoItem {
  id: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  notas?: string;
}

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonLabel, 
    IonList, 
    IonItem, 
    IonText, 
    IonButton, 
    IonFooter    
  ]
})
export class FacturaPage implements OnInit {

  numeroMesa: number = 7; // Ejemplo: Se obtendría de la ruta o un servicio
  itemsPedido: PedidoItem[] = [];
  subtotal: number = 0;
  descuento: number = 0; // Ejemplo de descuento, se podría calcular dinámicamente
  total: number = 0;

  constructor(private navCtrl: NavController) { } // Usamos NavController para volver atrás

  ngOnInit() {
    this.cargarPedidoSimulado();
    this.calcularTotales();
  }

  cargarPedidoSimulado() {
    this.itemsPedido = [
      { id: 1, nombre: 'Hamburguesa Clásica', cantidad: 2, precioUnitario: 8.50 },
      { id: 2, nombre: 'Papas Fritas Grandes', cantidad: 1, precioUnitario: 4.00, notas: 'Sin sal' },
      { id: 3, nombre: 'Coca-Cola Zero', cantidad: 3, precioUnitario: 2.20 },
      { id: 4, nombre: 'Ensalada César', cantidad: 1, precioUnitario: 9.75 },
    ];
  }

  calcularTotales() {
    this.subtotal = this.itemsPedido.reduce((sum, item) => sum + (item.cantidad * item.precioUnitario), 0);
    // Aplicar descuento si lo hubiera
    this.total = this.subtotal - this.descuento;
  }

  solicitarFactura() {
    console.log(`Solicitando factura para Mesa ${this.numeroMesa}, Total: $${this.total.toFixed(2)}`);
    // Aquí iría la lógica para enviar la solicitud de factura al backend
    // y luego navegar de vuelta a la vista de mesas o a una confirmación
    alert(`Factura solicitada para Mesa ${this.numeroMesa}. Total: $${this.total.toFixed(2)}`);
    this.navCtrl.navigateRoot('/mozo-app/mesas'); // Volver a la vista de mesas
  }

  cancelar() {
    console.log('Cancelando solicitud de factura.');
    // Aquí podrías volver a la vista anterior o a las mesas
    this.navCtrl.navigateRoot('/mozo-app/mesas');
  }
}