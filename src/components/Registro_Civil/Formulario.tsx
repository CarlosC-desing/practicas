import { useState } from "react";
import type { Solicitud, TramiteStatus } from "../../types/Solicitud";

interface Props {
  onAdd: (item: Solicitud) => void;
}

export const FormularioTramites = ({ onAdd }: Props) => {
  const [solicitante, setSolicitante] = useState("");
  const [tipo, setTipo] = useState("Nacimiento");
  const [registrador, setRegistrador] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaSolicitud = {
      id: Date.now(),
      solicitante: solicitante,
      tipo: tipo as "Nacimiento" | "Matrimonio" | "Defuncion",
      registrador: registrador,
      fecha: new Date().toLocaleDateString(),
      estado: "Pendiente" as TramiteStatus,
    };

    onAdd(nuevaSolicitud);
    setRegistrador("");
    setSolicitante("");
  };

  return (
    <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <label>Nombre del solicitante</label>
      <input
        type="text"
        value={solicitante}
        onChange={(e) => setSolicitante(e.target.value)}
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as TramiteStatus)}
      >
        <option value="Nacimiento">Nacimiento</option>
        <option value="Matrimonio">Matrimonio</option>
        <option value="Defuncion">Defuncion</option>
      </select>

      <label>Nombre del registrador</label>
      <input
        type="text"
        value={registrador}
        onChange={(e) => setRegistrador(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
};
