export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: 'entradas' | 'platos_principales' | 'bebidas' | 'postres';
}

export interface ItemPedido {
  productoId: number;
  nombre: string;
  cantidad: number;
  precioUnitario: number;
  subtotal: number;
  notas: string; // Para "sin sal", "extra queso", etc.
}