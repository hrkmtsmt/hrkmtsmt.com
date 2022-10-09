export type Styles = {
  'column-full': string;
  'column-large': string;
  'column-medium': string;
  'column-small': string;
  grid: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
