export interface Mesa {
  id: number;
  numero: number;
  estado: 'libre' | 'ocupada' | 'pendiente_pago' | 'atencion'; // Añadir 'atencion'
  mozoId: number | null; 
  asientos: number; // Nuevo campo para los asientos
}