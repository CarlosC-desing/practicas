import type { MoodType } from "../../types/Moods";

interface Props {
  label: string;
  type: MoodType;
  onSelect: (m: MoodType) => void;
}

export const MoodButton = ({ label, type, onSelect }: Props) => {
  return (
    <button
      onClick={() => onSelect(type)}
      style={{ fontSize: "2rem", margin: "5px", cursor: "pointer" }}
    >
      {label}
    </button>
  );
};
