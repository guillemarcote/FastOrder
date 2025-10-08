import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

// Importar modelos
import { Producto, ItemPedido } from 'src/app/models/producto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PedidoPage implements OnInit {

  mesaId: number;
  
  // Menú simulado
  menu: Producto[] = [];
  categorias: string[] = ['entradas', 'platos_principales', 'bebidas', 'postres'];
  categoriaSeleccionada: string = 'platos_principales'; // Categoría por defecto
  
  // Pedido en curso
  itemsPedido: ItemPedido[] = [];
  
  // Propiedades para mostrar/ocultar el carrito en móvil
  mostrarMenu: boolean = true; 
  mostrarResumen: boolean = false;
  
  // Getters
  get subtotalPedido(): number {
    return this.itemsPedido.reduce((sum, item) => sum + item.subtotal, 0);
  }
  
  get productosFiltrados(): Producto[] {
    return this.menu.filter(p => p.categoria === this.categoriaSeleccionada);
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // Obtener el ID de la mesa de la URL (ruta: /pedido/:id)
    this.mesaId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.cargarMenuSimulado();
    // En un caso real, podrías cargar un pedido existente si la mesa ya tenía uno
  }

  cargarMenuSimulado() {
    // Esto se reemplazaría por una llamada a la API
    this.menu = [
      { id: 101, nombre: 'Hamburguesa Clásica', descripcion: 'Doble carne, queso, lechuga y tomate.', precio: 5500, categoria: 'platos_principales' },
      { id: 102, nombre: 'Lomo Saltado', descripcion: 'Trozos de lomo, cebolla, tomate, papas fritas.', precio: 8000, categoria: 'platos_principales' },
      { id: 201, nombre: 'Papas Fritas', descripcion: 'Porción grande de papas.', precio: 1500, categoria: 'entradas' },
      { id: 202, nombre: 'Aros de Cebolla', descripcion: '10 aros de cebolla con salsa BBQ.', precio: 1800, categoria: 'entradas' },
      { id: 301, nombre: 'Coca-Cola', descripcion: 'Lata 355ml.', precio: 800, categoria: 'bebidas' },
      { id: 302, nombre: 'Agua Mineral', descripcion: 'Botella 500ml.', precio: 700, categoria: 'bebidas' },
      { id: 401, nombre: 'Flan con Crema', descripcion: 'Receta casera.', precio: 1200, categoria: 'postres' },
    ];
  }

  /**
   * Agrega o incrementa un producto al pedido.
   */
  agregarProducto(producto: Producto) {
    const itemExistente = this.itemsPedido.find(i => i.productoId === producto.id);

    if (itemExistente) {
      itemExistente.cantidad += 1;
      itemExistente.subtotal = itemExistente.cantidad * itemExistente.precioUnitario;
    } else {
      this.itemsPedido.push({
        productoId: producto.id,
        nombre: producto.nombre,
        cantidad: 1,
        precioUnitario: producto.precio,
        subtotal: producto.precio,
        notas: ''
      });
    }
  }

  /**
   * Elimina un ítem o reduce su cantidad.
   */
  manejarCantidad(item: ItemPedido, operacion: 'incrementar' | 'decrementar') {
    if (operacion === 'incrementar') {
      item.cantidad += 1;
    } else {
      item.cantidad -= 1;
    }

    if (item.cantidad <= 0) {
      // Eliminar el ítem si la cantidad llega a cero
      this.itemsPedido = this.itemsPedido.filter(i => i !== item);
    } else {
      item.subtotal = item.cantidad * item.precioUnitario;
    }
  }

  /**
   * Envía el pedido al backend (cocina/base de datos).
   */
  enviarPedido() {
    if (this.itemsPedido.length === 0) {
      // Usar un Toast o Alert para informar al mozo
      console.log("No hay ítems en el pedido.");
      return;
    }

    console.log(`Enviando pedido a cocina para Mesa ${this.mesaId}:`, this.itemsPedido);
    // Lógica de envío a API aquí

    // Simulación: Redirigir a la pantalla de Pedido en Curso (Image 4)
    this.router.navigate(['/pedido-en-curso', this.mesaId]);
  }

  // Lógica para cambiar de vista en móvil
  cambiarVista(vista: 'menu' | 'resumen') {
    this.mostrarMenu = vista === 'menu';
    this.mostrarResumen = vista === 'resumen';
  }
}