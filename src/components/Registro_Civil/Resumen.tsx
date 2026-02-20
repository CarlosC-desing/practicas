import type { Solicitud } from "../../types/Solicitud";

interface Props {
  tramites: Solicitud[];
}

export const Resumen = ({ tramites }: Props) => {
  const totalTramites = tramites.length;
  return <h1>Total de Solicitudes: {totalTramites}</h1>;
};
