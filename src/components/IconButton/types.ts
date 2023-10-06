export type IconButtonProps = {
  icon: JSX.Element;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
