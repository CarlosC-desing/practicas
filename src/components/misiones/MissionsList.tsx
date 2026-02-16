import type { Mission } from "../../types/Mission";

interface Props {
  mission: Mission[];
  onCompleted: (id: Mission["id"]) => void;
}

export const ListaDeMisiones = ({ mission, onCompleted }: Props) => {
  return (
    <>
      <ul>
        {mission.map(({ id, text, completed }) => (
          <li key={id}>
            <h2>
              {text} - {completed ? "✅" : "❌"}
            </h2>
            <button onClick={() => onCompleted(id)}>completar</button>
          </li>
        ))}
      </ul>
    </>
  );
};
