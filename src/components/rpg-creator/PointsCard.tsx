import type { HeroStats } from "../../types/Hero";

interface Props {
  stats: HeroStats;
  onDeletePoint: (stat: string) => void;
  onAddPoint: (stat: string) => void;
}

export const PointsCard = ({ stats, onDeletePoint, onAddPoint }: Props) => {
  return (
    <>
      <div className="d-flex mb-5">
        <section className="p-3 text-center">
          <h2>Fuerza</h2>
          <p>{stats.fuerza}</p>
          <div>
            <button onClick={() => onAddPoint("fuerza")}>
              Añadir Punto de Fuerza
            </button>
            <button onClick={() => onDeletePoint("fuerza")}>
              Quitar Punto de Fuerza
            </button>
          </div>
        </section>
        <section className="p-3 text-center">
          <h2>Agilidad</h2>
          <p>{stats.agilidad}</p>
          <div>
            <button onClick={() => onAddPoint("agilidad")}>
              Añadir Punto de Agilidad
            </button>
            <button onClick={() => onDeletePoint("agilidad")}>
              Quitar Punto de Agilidad
            </button>
          </div>
        </section>
        <section className="p-3 text-center">
          <h2>Magia</h2>
          <p>{stats.magia}</p>
          <div>
            <button onClick={() => onAddPoint("magia")}>
              Añadir Punto de Magia
            </button>
            <button onClick={() => onDeletePoint("magia")}>
              Quitar Punto de Magia
            </button>
          </div>
        </section>
      </div>
    </>
  );
};
