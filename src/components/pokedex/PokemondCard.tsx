import type { ApiResponsePokemon } from "../../types/ApiResponsePokemon";
interface Props {
  data: ApiResponsePokemon | null;
  children?: React.ReactNode;
}
export const PokemonCard = ({ data, children }: Props) => {
  if (!data) return null;
  return (
    <>
      <div className="card" /* style={{ width: "200px" }} */>
        <img
          style={{ width: "100px" }}
          src={data.sprites.front_default}
          className="card-img-top"
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{data.name}</h5>
          <p className="card-text">
            <p>Types:</p>
            <ul>
              {data.types.map((p) => (
                <li key={p.type.name}>{p.type.name}</li>
              ))}
            </ul>
          </p>
        </div>
        <div className="card-footer">{children}</div>
      </div>
    </>
  );
};
