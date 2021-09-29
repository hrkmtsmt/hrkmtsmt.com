export const square = {
  width: 1200,
  height: 1200,
};

export const portrait = {
  width: 800,
  height: 1200,
};

export const landscape = {
  width: 1200,
  height: 800,
};

export const ogp = {
  width: 1200,
  height: 630,
};

export const loader = (image: string, width: number, quality: number) => {
  return `${image}?w=${width}&q=${quality}`;
};
