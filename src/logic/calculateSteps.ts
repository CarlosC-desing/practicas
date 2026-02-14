import type { StepRecord } from "../types/StepRecord";

export const calculateSteps = (steps: StepRecord[]): number => {
  return steps.reduce((acc, stepcurrent) => acc + stepcurrent.count, 0);
};
