import { useEffect, useState } from "react";
import type { ApiResponsePokemon } from "../../types/ApiResponsePokemon";
import { PokemonCard } from "./PokemondCard";

export default function Pokedex() {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState<ApiResponsePokemon | null>(null);
  const [equipo, setEquipo] = useState<ApiResponsePokemon[]>([]);
  const [busquedaPk, setBusquedaPk] = useState("pikachu");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const handleCapture = (pokemon: ApiResponsePokemon) => {
    const yaExiste = equipo.some((p) => p.id === pokemon.id);
    if (equipo.length <= 5 && !yaExiste) {
      setEquipo([...equipo, pokemon]);
    }
  };

  const handleRemove = (id: number) => {
    const nuevoEquipo = equipo.filter((p) => p.id !== id);
    setEquipo(nuevoEquipo);
  };

  useEffect(() => {
    if (busquedaPk === "") return;
    setLoading(true); // Correcto: true al inicio
    setError(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${busquedaPk.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) throw new Error("Pokemon no encontrado :(");
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setPokemon(null);
        setLoading(false);
      });
  }, [busquedaPk]);
  return (
    <>
      <h1
        className="text-center"
        style={{ letterSpacing: "10px", fontSize: "60px", margin: "20px 0" }}
      >
        Pokedéx
      </h1>
      <div className="d-flex gap-5">
        <div style={{ width: "30%" }}>
          <div className="d-flex flex-column gap-5">
            <div className="d-flex gap-3">
              <input
                style={{ width: "80%" }}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Lucario"
              />
              <button onClick={() => setBusquedaPk(input)}>Buscar</button>
            </div>
            {loading && <p>Cargando...</p>}
            {error && <p>error: {error}</p>}
            {pokemon && !error && !loading && (
              <PokemonCard data={pokemon}>
                {" "}
                <button onClick={() => handleCapture(pokemon)}>Capturar</button>
              </PokemonCard>
            )}
          </div>
        </div>
        <div className="border rounded p-3" style={{ width: "70%" }}>
          <h2 className="text-center">Tu Equipo</h2>
          <div className="d-flex flex-wrap gap-2">
            {equipo.map((p) => (
              <PokemonCard key={p.id} data={p}>
                <button onClick={() => handleRemove(p.id)}>Liberar</button>
              </PokemonCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
