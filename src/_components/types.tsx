export type Props = {
  id?: string;
  title?: string;
  body?: HTMLElement;
  children?: React.ReactNode;
  date?: string;
  tag?: string;
  desc?: string;
  caption?: string;
  cat?: string;
  dir?: string;
  img?: string;
  link: string;
  cta: string;
  alt?: string;
};

export type EventHandler = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
