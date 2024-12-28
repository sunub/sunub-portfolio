import { useGLTF } from "@react-three/drei";

function TreeLights() {
  const { scene } = useGLTF("/models/tree_light.gltf");
  return <primitive object={scene} />;
}

export { TreeLights };
