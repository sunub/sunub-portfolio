// @ts-nocheck
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh, ShaderMaterial } from "three";
import { extend, useFrame } from "@react-three/fiber";
import { PlanetMaterial } from "../lib/materials/PlanetMaterial";

extend({ PlanetMaterial });

function Planet() {
  const { scene } = useGLTF("/src/assets/models/planetBright.gltf");
  const materialRef = useRef<ShaderMaterial>(null!);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;
    }
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        const material = new PlanetMaterial({
          transparent: true,
          uColor1: [1, 0.5, 0],
          uColor2: [0, 0, 1],
          uEmissionColor: [0, 0, 1],
          uEmissionStrength: 0.2,
        });
        child.material = material;

        if (!materialRef.current) {
          materialRef.current = material;
        }
      }
    });
  }, [scene]);

  return <primitive scale={1} object={scene} />;
}

export { Planet };
