import { useState } from "react";
import { ArmaCard } from "./ArmaCard";

export default function Armeria() {
  const [ataqueTotal, setAtaqueTotal] = useState(0);
  const [armaEquipada, setArmaEquipada] = useState<string>("");

  const handleSelect = (danio: number, name: string) => {
    setAtaqueTotal(danio);
    setArmaEquipada(name);
  };

  return (
    <>
      <h1>Armería</h1>
      <h2>Daño Total: {ataqueTotal}</h2>
      <div className="d-flex gap-3">
        <ArmaCard
          name={"Parte Tormentas"}
          danio={150}
          onSelect={(danio) => handleSelect(danio, "Parte Tormentas")}
          estaEquipada={armaEquipada === "Parte Tormentas"}
        />
        <ArmaCard
          name={"Porta Truenos"}
          danio={160}
          onSelect={(danio) => handleSelect(danio, "Porta Truenos")}
          estaEquipada={armaEquipada === "Porta Truenos"}
        />
        <ArmaCard
          name={"Lanza de Zeus"}
          danio={180}
          onSelect={(danio) => handleSelect(danio, "Lanza de Zeus")}
          estaEquipada={armaEquipada === "Lanza de Zeus"}
        />
      </div>
    </>
  );
}
