import type { Item } from "../types/Item";

export const ComprarPocion = (
  items: Item[],
  idSeleccionado: number,
  oroActual: number,
  precio: number,
  verificar: (o: number, p: number) => boolean,
) => {
  if (!verificar(oroActual, precio)) {
    return items;
  }
  return items.map((i) => {
    if (i.id === idSeleccionado) {
      return { ...i, cantidad: i.cantidad + 1 };
    }
    return i;
  });
};

export const DevolverPocion = (items: Item[], idSeleccionado: number) => {
  return items.map((i) => {
    if (i.id === idSeleccionado && i.cantidad > 0) {
      return { ...i, cantidad: i.cantidad - 1 };
    }
    return i;
  });
};

export const GoldCalculator = (
  oroActual: number,
  precio: number,
  esVenta: boolean,
) => {
  if (esVenta) {
    return oroActual + precio;
  }

  if (oroActual >= precio) {
    return oroActual - precio;
  }

  return oroActual;
};

export const Transaccion = (oroActual: number, precio: number): boolean => {
  return oroActual >= precio;
};
