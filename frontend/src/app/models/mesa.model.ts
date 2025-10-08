export interface Mesa {
  id: number;
  numero: number;
  estado: 'libre' | 'ocupada' | 'pendiente_pago';
  mozoId: number | null; // ID del mozo que la atiende (si está ocupada)
}