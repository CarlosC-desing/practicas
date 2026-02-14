import type { Marcador } from "../types/Marcador";

export const CalcularMarcador = (marcador: Marcador): string => {
  const { local, visitante } = marcador;
  if (local > visitante) return "Ganando Local";
  if (visitante > local) return "Ganando Visitantes";
  return "Empate";
};
