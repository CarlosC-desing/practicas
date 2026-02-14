import { useState } from "react";
import type { StepRecord } from "../types/StepRecord";
import { calculateSteps } from "../logic/calculateSteps";
import { StepButton } from "./StepButton";

export default function StepCounter() {
  const [list, setList] = useState<StepRecord[]>([]);

  const handleStep = (num: number) => {
    const newRecord: StepRecord = { id: Date.now(), count: num };
    setList([...list, newRecord]);
  };
  const total = calculateSteps(list);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <h1>Pasos Totales</h1>
        <span className="counter">{total}</span>
        <StepButton steps={list} onStep={handleStep} />
      </div>
    </>
  );
}
