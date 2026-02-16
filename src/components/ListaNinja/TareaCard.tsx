import { useState } from "react";

interface Props {
  text: string;
  completar: () => void;
}

export const TareaCard = ({ text, completar }: Props) => {
  const [completado, setCompletado] = useState(false);

  const CompletarTarea = () => {
    if (!completado) {
      setCompletado(true);
      completar();
    }
  };

  return (
    <>
      <li>
        <h2 style={{ color: completado ? "green" : "white" }}>{text}</h2>
        <button onClick={CompletarTarea} disabled={completado}>
          Completar
        </button>
      </li>
    </>
  );
};
