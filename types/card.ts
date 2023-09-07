export interface Card {
  id: number;
  name: string;
  description: string;
  image: string;
  active: number;
  details: string;
  handleClick: (id: number) => void;
}
