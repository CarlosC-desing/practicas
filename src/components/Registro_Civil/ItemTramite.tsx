import type { Solicitud } from "../../types/Solicitud";

interface Props {
  item: Solicitud;
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

export const ItemRow = ({ item, onToggleStatus, onDelete }: Props) => {
  return (
    <tr>
      <td>{item.solicitante}</td>
      <td>{item.tipo}</td>
      <td>{item.registrador}</td>
      <td>{item.fecha}</td>
      <td>{item.estado}</td>
      <td className="d-flex gap-2">
        <button onClick={() => onToggleStatus(item.id)}>Procesar</button>
        <button onClick={() => onDelete(item.id)}>Eliminar</button>
      </td>
    </tr>
  );
};
