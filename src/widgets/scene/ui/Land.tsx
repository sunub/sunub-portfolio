import { useGLTF } from "@react-three/drei";
import { Mesh, DoubleSide } from "three";
import { useEffect } from "react";
import { LandMaterial } from "../lib/materials/LandMaterial";
import { extend } from "@react-three/fiber";

extend({ LandMaterial });

function Land() {
  const { scene } = useGLTF("/src/assets/models/land.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        const material = new LandMaterial({
          side: DoubleSide,
        });

        child.material = material;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export { Land };
