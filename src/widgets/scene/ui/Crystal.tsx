import { useGLTF } from "@react-three/drei";

function Crystal() {
  const { scene } = useGLTF("/models/crytal_with_land.gltf");
  return <primitive object={scene} />;
}

export { Crystal };
