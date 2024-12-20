import { MaterialNode } from "@react-three/fiber";
import { ShaderMaterial, Vector2 } from "three";

// 유니폼 변수들의 타입을 정의
export interface PlanetMaterialUniforms {
  uTime: number;
  uColorStop1: Vector2;
  uColorStop2: Vector2;
  uColor1: [number, number, number];
  uColor2: [number, number, number];
  uEmissionColor: [number, number, number];
  uEmissionStrength: number;
}

// PlanetMaterial의 프로퍼티 타입 정의
export interface PlanetMaterialProps {
  transparent?: boolean;
  uTime?: number;
  uColorStop1?: Vector2;
  uColorStop2?: Vector2;
  uColor1?: [number, number, number];
  uColor2?: [number, number, number];
  uEmissionColor?: [number, number, number];
  uEmissionStrength?: number;
}

// ShaderMaterial을 확장하여 PlanetMaterial 타입 정의
export type PlanetMaterialType = ShaderMaterial &
  MaterialNode<ShaderMaterial, PlanetMaterialProps> & {
    uniforms: {
      [K in keyof PlanetMaterialUniforms]: { value: PlanetMaterialUniforms[K] };
    };
  } & { [K in keyof PlanetMaterialUniforms]: PlanetMaterialUniforms[K] };
