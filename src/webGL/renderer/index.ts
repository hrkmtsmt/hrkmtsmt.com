import { MutableRefObject } from 'react';
import { WebGL1Renderer } from 'three';

export const threeRenderer = async (
  ref: MutableRefObject<HTMLDivElement | null>
) => {
  const renderer = new WebGL1Renderer();

  ref.current.appendChild(renderer.domElement);
};
