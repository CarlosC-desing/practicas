import { useState } from "react";
import type { MoodType } from "../../types/Moods";
import { MoodButton } from "./MoodButton";

export default function MoodPage() {
  const [currentMood, setCurrentMood] = useState<MoodType>("neutral");

  // Definimos los estilos basados en el mood
  const moodSettings: Record<MoodType, { color: string; text: string }> = {
    neutral: { color: "#e0e0e0", text: "Me siento normal..." },
    productivo: { color: "#ffeb3b", text: "¡A darle con todo! 🔥" },
    relajado: { color: "#81d4fa", text: "Chill... tomando un café ☕" },
    triste: { color: "#90caf9", text: "Un poco desanimado ☁️" },
    enamorado: { color: "#f48fb1", text: "Flotando en las nubes ❤️" },
  };

  return (
    <div
      style={{
        backgroundColor: moodSettings[currentMood].color,
        minHeight: "100vh",
        transition: "all 0.5s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{moodSettings[currentMood].text}</h1>

      <div>
        <MoodButton label="😐" type="neutral" onSelect={setCurrentMood} />
        <MoodButton label="🚀" type="productivo" onSelect={setCurrentMood} />
        <MoodButton label="🧘" type="relajado" onSelect={setCurrentMood} />
        <MoodButton label="😢" type="triste" onSelect={setCurrentMood} />
        <MoodButton label="💖" type="enamorado" onSelect={setCurrentMood} />
      </div>

      <p style={{ marginTop: "20px" }}>Haz clic para cambiar el ambiente</p>
    </div>
  );
}
