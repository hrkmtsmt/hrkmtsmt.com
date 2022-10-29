import { MutableRefObject } from 'react';
import {
  BoxGeometry,
  Color,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGL1Renderer
} from 'three';

export const threeRenderer = (ref: MutableRefObject<HTMLDivElement | null>) => {
  const renderer = new WebGL1Renderer();

  renderer.domElement.classList.add('w-full');
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  ref.current.appendChild(renderer.domElement);

  const scene = new Scene();

  const camera = new PerspectiveCamera(45, 1, 1, 10000);
  camera.position.set(0, 0, 1000);

  const geometry = new BoxGeometry(200, 200, 200);

  const primaryColor = new Color('rgb(47, 118, 230)');

  const material = new MeshStandardMaterial({ color: primaryColor });

  const boxMesh = new Mesh(geometry, material);
  scene.add(boxMesh);

  const light = new DirectionalLight(0xffffff);
  light.position.set(1, 1, 1);
  scene.add(light);

  tick();

  function tick() {
    requestAnimationFrame(tick);

    boxMesh.rotation.x += 0.01;
    boxMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  return () => {
    const emptyElement = document.createElement('div');
    ref.current.appendChild(emptyElement);
  };
};
