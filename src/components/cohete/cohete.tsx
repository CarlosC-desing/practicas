import { useState } from "react";

export default function PanelCohete() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);

  return (
    <>
      <div>
        <h1>Panel de control</h1>
        <div>
          <h2>Botones de Despegue</h2>
          <section>
            <button onClick={() => setButton1(!button1)}>
              Encender Cohete
            </button>
            <button onClick={() => setButton2(!button2)}>
              Encender Propulsor
            </button>
          </section>
          {button1 && button2 && (
            <>
              <button disabled onClick={() => alert("¡Cohete lanzado!")}>
                ¡Despegar!
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
