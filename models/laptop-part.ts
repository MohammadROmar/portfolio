import {
  BufferGeometry,
  NormalBufferAttributes,
  MeshStandardMaterial,
} from 'three';

export type LaptopPart = {
  geometry: BufferGeometry<NormalBufferAttributes>;
  material: MeshStandardMaterial;
};
