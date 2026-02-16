import { useState } from "react";
import type { Item } from "../../types/Item";
import {
  ComprarPocion,
  DevolverPocion,
  GoldCalculator,
  Transaccion,
} from "../../logic/GoldCalculator";
import { MesaInventario } from "./MesaInventario";
import { INITIAL_INVENTORY } from "../../logic/InitialItems";

export default function Inventario() {
  const [inventario, setInventario] = useState<Item[]>(INITIAL_INVENTORY);
  const [oro, setOro] = useState(1200);
  const handleBuy = (id: number, precio: number) => {
    const nuevoInventario = ComprarPocion(
      inventario,
      id,
      oro,
      precio,
      Transaccion,
    );

    if (nuevoInventario !== inventario) {
      setInventario(nuevoInventario);

      const nuevoOro = GoldCalculator(oro, precio, false);
      setOro(nuevoOro);
    } else {
      alert("¡No tienes suficiente oro para esta poción!");
    }
  };

  const handleSell = (id: number, precio: number) => {
    const nuevoInventario = DevolverPocion(inventario, id);

    if (nuevoInventario !== inventario) {
      setInventario(nuevoInventario);
      setOro(GoldCalculator(oro, precio, true));
    }
  };

  return (
    <div>
      <h1>Oro actual: {oro}g</h1>
      <MesaInventario
        items={inventario}
        onBuy={handleBuy}
        onSell={handleSell}
      />
    </div>
  );
}
