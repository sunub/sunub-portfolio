import { useGLTF } from "@react-three/drei";

function TreeBranches() {
  const { scene } = useGLTF("/models/tree_branches.gltf");
  return <primitive object={scene} />;
}

export { TreeBranches };
