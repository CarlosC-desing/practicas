interface Props {
  name: string;
  danio: number;
  onSelect: (danio: number, name: string) => void;
  estaEquipada: boolean;
}

export const ArmaCard = ({ name, danio, onSelect, estaEquipada }: Props) => {
  return (
    <>
      <div
        className="card w-25"
        style={{ outline: estaEquipada ? "4px solid blue" : "none" }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Daño: {danio}</p>
          <button
            className="btn btn-primary"
            onClick={() => onSelect(danio, name)}
            disabled={estaEquipada}
          >
            {estaEquipada ? "Seleccionada" : "Seleccionar"}
          </button>
        </div>
      </div>
    </>
  );
};
