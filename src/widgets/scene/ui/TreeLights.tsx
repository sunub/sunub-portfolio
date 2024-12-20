import { useGLTF } from "@react-three/drei";

function TreeLights() {
  const { scene } = useGLTF("/src/assets/models/tree_light.gltf");
  return <primitive object={scene} />;
}

export { TreeLights };
