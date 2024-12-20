import { useGLTF } from "@react-three/drei";

function TreeBranches() {
  const { scene } = useGLTF("/src/assets/models/tree_branches.gltf");
  return <primitive object={scene} />;
}

export { TreeBranches };
