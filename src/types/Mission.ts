type id = `${string}-${string}-${string}-${string}-${string}`;

export interface Mission {
  id: id;
  text: string;
  completed: boolean;
}
