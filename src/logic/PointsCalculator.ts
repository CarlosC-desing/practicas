import type { HeroStats } from "../types/Hero";

export const PointsCalculator = (stats: HeroStats): number => {
  return stats.agilidad + stats.fuerza + stats.magia;
};
