import { useGLTF } from "@react-three/drei";

function Cystal() {
  const { scene } = useGLTF("/src/assets/models/crytal_with_land.gltf");
  return <primitive object={scene} />;
}

export { Cystal };
