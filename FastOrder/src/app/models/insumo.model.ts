export interface Insumo {
  id: number;
  nombre: string;
  stockActual: number;
  unidadDeMedida: string; // Ej: "kg", "gr", "unidades", "litros"
  stockMinimo: number; // Para alertas de bajo stock
  proveedor: string;
}