import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CustomStars } from "./ui/CustomStars";
import { Land } from "./ui/Land";
import { Planet } from "./ui/Planet";
import { Cystal } from "./ui/Crystal";
import { TreeLights } from "./ui/TreeLights";
import { Atmosphere } from "./ui/Atmosphere";
import { TreeBranches } from "./ui/TreeBranches";

function Scene() {
  return (
    <Canvas className="max-h-[910px]">
      <color attach="background" args={["#05001d"]} />
      <PerspectiveCamera makeDefault position={[0, 0, -78]} fov={6} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <CustomStars />
      <Planet />
      <Atmosphere />
      <Land />
      <TreeBranches />
      <TreeLights />
      <Cystal />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={2} levels={5} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}

export { Scene };
