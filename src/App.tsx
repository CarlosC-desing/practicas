import { useState, useEffect } from "react";
import type { Solicitud, TramiteStatus } from "./types/Solicitud";
import { ListaTramites } from "./components/Registro_Civil/ListaTramites";
import { FormularioTramites } from "./components/Registro_Civil/Formulario";
import { Resumen } from "./components/Registro_Civil/Resumen";

function App() {
  const [listTramites, setListTramites] = useState<Solicitud[]>(() => {
    const saved = localStorage.getItem("tramites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tramites", JSON.stringify(listTramites));
  }, [listTramites]);

  const onAdd = (nuevaSolicitud: Solicitud) => {
    setListTramites([...listTramites, nuevaSolicitud]);
  };

  const onDelete = (id: number) => {
    const nuevaLista = listTramites.filter((item) => item.id !== id);
    setListTramites(nuevaLista);
  };

  const onToggleStatus = (id: number) => {
    const nuevaLista = listTramites.map((item) =>
      item.id === id
        ? {
            ...item,
            estado: (item.estado === "Pendiente"
              ? "Procesado"
              : "Pendiente") as TramiteStatus,
          }
        : item,
    );
    setListTramites(nuevaLista);
  };
  return (
    <>
      <div className="container text-white">
        <h1 className="text-center">Solictudes - Registro Civil</h1>
        <div className="d-flex gap-5">
          <div>
            <FormularioTramites onAdd={onAdd} />
          </div>
          <div>
            <Resumen tramites={listTramites} />
            <ListaTramites
              tramites={listTramites}
              onDelete={onDelete}
              onToggle={onToggleStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
