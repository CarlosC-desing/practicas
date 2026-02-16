import type { Item } from "../../types/Item";

interface Props {
  items: Item[];
  onBuy: (id: number, precio: number) => void;
  onSell: (id: number, precio: number) => void;
}

export const MesaInventario = ({ items, onBuy, onSell }: Props) => {
  return (
    <>
      <div className="d-flex gap-4 p-3">
        {items.map((i) => (
          <section key={i.id}>
            <h2 className="fs-6">{i.name}</h2>
            <p>Precio: {i.precio}g</p>
            <p>Cantidad: {i.cantidad}</p>
            <div className="d-flex">
              <button onClick={() => onBuy(i.id, i.precio)}>
                Comprar Poción
              </button>
              <button
                onClick={() => onSell(i.id, i.precio)}
                disabled={i.cantidad <= 0}
              >
                Vender Poción
              </button>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
