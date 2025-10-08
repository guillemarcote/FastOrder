import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

// Importar modelo
import { Insumo } from 'src/app/models/insumo.model';

@Component({
  selector: 'app-stock-admin',
  templateUrl: './stock-admin.page.html',
  styleUrls: ['./stock-admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StockAdminPage implements OnInit {

  // Lista de insumos
  insumos: Insumo[] = [];
  
  // Nuevo insumo para el formulario de carga
  nuevoInsumo: Partial<Insumo> = {
    nombre: '',
    stockActual: 0,
    unidadDeMedida: 'unidades',
    stockMinimo: 5,
    proveedor: ''
  };

  // Variable para alternar la vista entre lista y formulario de carga
  mostrarLista: boolean = true; 

  // Getters para filtros
  get insumosBajoStock(): Insumo[] {
    return this.insumos.filter(i => i.stockActual < i.stockMinimo);
  }

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.cargarInsumosSimulados();
  }

  cargarInsumosSimulados() {
    // Simulación de carga de la BD
    this.insumos = [
      { id: 1, nombre: 'Carne Molida', stockActual: 15, unidadDeMedida: 'kg', stockMinimo: 20, proveedor: 'Carnicería Fina' },
      { id: 2, nombre: 'Tomate', stockActual: 30, unidadDeMedida: 'unidades', stockMinimo: 50, proveedor: 'Verdulería Local' },
      { id: 3, nombre: 'Cerveza Patagonia', stockActual: 8, unidadDeMedida: 'litros', stockMinimo: 10, proveedor: 'Distribuidora H' },
      { id: 4, nombre: 'Queso Cheddar', stockActual: 3, unidadDeMedida: 'kg', stockMinimo: 5, proveedor: 'Lácteos Sur' },
    ];
  }

  // Carga o crea un nuevo insumo
  guardarNuevoInsumo() {
    if (!this.nuevoInsumo.nombre || !this.nuevoInsumo.stockActual) {
      this.presentToast('Rellena todos los campos obligatorios.', 'danger');
      return;
    }
    
    // Simular guardado en la BD
    const id = Math.max(...this.insumos.map(i => i.id)) + 1 || 1;
    this.insumos.push({
      ...this.nuevoInsumo as Insumo, // Convertir a tipo Insumo completo
      id: id,
      stockActual: Number(this.nuevoInsumo.stockActual)
    });
    
    this.presentToast(`Insumo "${this.nuevoInsumo.nombre}" guardado con éxito.`, 'success');
    this.resetFormulario();
    this.mostrarLista = true; // Volver a la lista
  }

  // Permite al administrador editar el stock de un insumo
  async actualizarStock(insumo: Insumo) {
    const alert = await this.alertController.create({
      header: `Actualizar Stock de ${insumo.nombre}`,
      inputs: [
        {
          name: 'cantidad',
          type: 'number',
          placeholder: `Stock actual: ${insumo.stockActual} ${insumo.unidadDeMedida}`,
          min: 0,
        },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            const nuevaCantidad = Number(data.cantidad);
            if (!isNaN(nuevaCantidad) && nuevaCantidad >= 0) {
              insumo.stockActual = nuevaCantidad;
              this.presentToast(`Stock de ${insumo.nombre} actualizado.`, 'success');
            } else {
              this.presentToast('Cantidad inválida.', 'danger');
            }
          }
        }
      ]
    });
    await alert.present();
  }

  resetFormulario() {
    this.nuevoInsumo = {
      nombre: '',
      stockActual: 0,
      unidadDeMedida: 'unidades',
      stockMinimo: 5,
      proveedor: ''
    };
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  toggleVista() {
    this.mostrarLista = !this.mostrarLista;
    if (!this.mostrarLista) {
      this.resetFormulario();
    }
  }

  getColorAlerta(insumo: Insumo): string {
    return insumo.stockActual < insumo.stockMinimo ? 'danger' : 'success';
  }
}