import type { StepRecord } from "../types/StepRecord";

interface Props {
  steps: StepRecord[];
  onStep: (count: number) => void;
}

export const StepButton = ({ onStep }: Props) => {
  return <button onClick={() => onStep(1)}>¡Sumar un paso!</button>;
};
