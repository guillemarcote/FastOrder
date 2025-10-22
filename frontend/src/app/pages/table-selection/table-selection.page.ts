import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// Importa el modelo de datos
import { Mesa } from 'src/app/models/mesa.model';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.page.html',
  styleUrls: ['./table-selection.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule] // No necesitamos FormsModule aquí
})
export class TableSelectionPage implements OnInit {
 
  // Simulación de los datos de las mesas
  mesas: Mesa[] = [];

  get mesasNecesitanAtencion(): number {
    // Filtra las mesas con estado 'atencion' y devuelve el conteo.
    return this.mesas.filter(m => m.estado === 'atencion').length;
  }

  get mesasOcupadas(): number {
    // Filtra las mesas con estado 'ocupada' y devuelve el conteo. 
    return this.mesas.filter(m => m.estado === 'ocupada').length;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    // En un proyecto real, esto llamaría a un servicio para obtener el listado desde la BD
    this.cargarMesasSimuladas();
  }

  cargarMesasSimuladas() {
    this.mesas = [
      { id: 1, numero: 1, estado: 'libre', mozoId: null, asientos: 4 },
      { id: 2, numero: 2, estado: 'atencion', mozoId: 101, asientos: 2 }, // Atencion
      { id: 3, numero: 3, estado: 'ocupada', mozoId: 101, asientos: 6 },
      { id: 4, numero: 4, estado: 'libre', mozoId: null, asientos: 2 },
      { id: 5, numero: 5, estado: 'ocupada', mozoId: 101, asientos: 4 },
      { id: 6, numero: 6, estado: 'libre', mozoId: null, asientos: 6 },
      { id: 7, numero: 7, estado: 'atencion', mozoId: 101, asientos: 6 }, // Atencion
      { id: 8, numero: 8, estado: 'ocupada', mozoId: null, asientos: 4 },
    ];
    console.log("Mesas cargadas:", this.mesas.length);
  }

  /**
   * Navega a la pantalla de carga de pedido.
   * Envia el ID de la mesa seleccionada como parámetro.
   */
  seleccionarMesa(mesa: Mesa) {
    console.log('Mesa seleccionada:', mesa);
    
    // Aquí validaremos si la mesa está libre o ya tiene un pedido
    // Simulamos la navegación a la pantalla de Carga de Pedido (Image 3)
    // El 'replaceUrl: true' es opcional, evita que el usuario pueda volver con el botón de atrás
    this.router.navigate(['/pedido', mesa.id], { replaceUrl: true });
  }

  /**
   * Determina el color del estado para la interfaz.
   */
  getColorEstado(estado: Mesa['estado']): string {
    switch (estado) {
      case 'ocupada':
        return 'secondary'; // Cambiado a un color estándar de Ionic
      case 'libre':
        return 'success';
      case 'pendiente_pago':
        return 'warning';
      case 'atencion': // Nuevo estado de atención
        return 'danger'; 
      default:
        return 'medium';
    }
  }

}