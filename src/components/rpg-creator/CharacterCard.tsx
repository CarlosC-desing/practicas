import { useState } from "react";
import type { HeroStats } from "../../types/Hero";
import { PointsCalculator } from "../../logic/PointsCalculator";
import { PointsCard } from "./PointsCard";

export default function CharacterCard() {
  const [stats, setStats] = useState<HeroStats>({
    fuerza: 0,
    agilidad: 0,
    magia: 0,
  });

  const gastados = PointsCalculator(stats);
  const puntosRestantes = 10 - gastados;

  const handleAddPoint = (name: string) => {
    if (gastados >= 10) return;

    setStats({
      ...stats,
      [name]: stats[name as keyof HeroStats] + 1,
    });
  };

  const handleDeletePoint = (name: string) => {
    const valorActual = stats[name as keyof HeroStats];

    if (valorActual <= 0) return;

    setStats({
      ...stats,
      [name]: stats[name as keyof HeroStats] - 1,
    });
  };

  return (
    <>
      <div>
        <h1 className="text-center">Estadísticas de Mia</h1>
        <div className="d-flex">
          <div>
            <img
              className="mia"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8da4955e-c39a-4e52-ab05-4ec9aa012ad2/dhj9zmg-2183f146-86be-4463-ba2b-091c5e1de3f3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkYTQ5NTVlLWMzOWEtNGU1Mi1hYjA1LTRlYzlhYTAxMmFkMlwvZGhqOXptZy0yMTgzZjE0Ni04NmJlLTQ0NjMtYmEyYi0wOTFjNWUxZGUzZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TtqmLewFJPlj8OJE22dpeQ-_ODq7oG5SblV7BFJngCA"
              alt="Mia"
            />
          </div>
          <div>
            <PointsCard
              stats={stats}
              onDeletePoint={handleDeletePoint}
              onAddPoint={handleAddPoint}
            />
            <div>
              <p className="text-center mt-5">{puntosRestantes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
