// types.d.ts
import { ShaderMaterial } from "three";
import { Object3DNode } from "@react-three/fiber";
import { Vector2 } from "three";

declare module "three" {
  interface PlanetMaterialImpl extends ShaderMaterial {
    uTime: number;
    uColorStop1: Vector2;
    uColorStop2: Vector2;
    uColor1: number[];
    uColor2: number[];
    uEmissionColor: number[];
    uEmissionStrength: number;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      planetMaterial: Object3DNode<
        PlanetMaterialImpl,
        typeof PlanetMaterialImpl
      >;
    }
  }
}
