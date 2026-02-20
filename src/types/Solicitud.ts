export type TramiteStatus = "Pendiente" | "Procesado";

export interface Solicitud {
  id: number;
  solicitante: string;
  tipo: "Nacimiento" | "Matrimonio" | "Defuncion";
  registrador: string;
  fecha: string;
  estado: TramiteStatus;
}
