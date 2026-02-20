import type { Solicitud, TramiteStatus } from "../../types/Solicitud";
import { ItemRow } from "./ItemTramite";
import { useState } from "react";

interface Props {
  tramites: Solicitud[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export const ListaTramites = ({ tramites, onDelete, onToggle }: Props) => {
  const [filtro, setFiltro] = useState<TramiteStatus | "Todos">("Todos");
  const tramitesMostrados = tramites.filter((t) => {
    if (filtro === "Todos") return true;
    return t.estado === filtro;
  });

  return (
    <>
      <div className="d-flex flex-column">
        <span>Filtro por estado:</span>
        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value as TramiteStatus)}
        >
          <option value="Todos">Mostrar Todos</option>
          <option value="Pendiente">Solo Pendientes</option>
          <option value="Procesado">Solo Procesados</option>
        </select>
      </div>
      <table className="table">
        <tr>
          <td>Solicitante</td>
          <td>Tipo</td>
          <td>Registrador</td>
          <td>Fecha</td>
          <td>Estado</td>
          <td>Acciones</td>
        </tr>
        {tramitesMostrados.map((s) => (
          <ItemRow
            key={s.id}
            item={s}
            onToggleStatus={() => onToggle(s.id)}
            onDelete={() => onDelete(s.id)}
          ></ItemRow>
        ))}
      </table>
    </>
  );
};
