import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { CloudMaterial } from "../lib/materials/CloudMaterial";
import { DoubleSide, Mesh } from "three";

extend({ CloudMaterial });

function Atmosphere() {
  const { scene } = useGLTF("/models/atmosphere.gltf");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    scene.rotation.y = t * 0.05;
    scene.position.y = Math.sin(t * 0.2) * 0.2;
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        const material = new CloudMaterial({
          side: DoubleSide,
        });

        child.material = material;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export { Atmosphere };
