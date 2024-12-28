import { useGLTF } from "@react-three/drei";
import { Mesh, DoubleSide, Group } from "three";
import { useEffect, useRef } from "react";
import { LandMaterial } from "../lib/materials/LandMaterial";
import { extend, useFrame } from "@react-three/fiber";
import { TreeLights } from "./TreeLights";
import { Crystal } from "./Crystal";
import { easing } from "maath";

extend({ LandMaterial });

function Land() {
  const { scene } = useGLTF("/models/land.gltf");
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    easing.damp(groupRef.current.position, "y", Math.sin(t * 0.5) * 0.1, 0.5);
  });

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

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
      <TreeLights />
      <Crystal />
    </group>
  );
}

export { Land };
