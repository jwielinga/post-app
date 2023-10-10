export type PostItemProps = {
  id: number;
  onUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
