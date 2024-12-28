import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CustomStars } from "./ui/CustomStars";
import { Land } from "./ui/Land";
import { Planet } from "./ui/Planet";
import { Atmosphere } from "./ui/Atmosphere";
import { CameraRig } from "./ui/CamerRig";

function Scene() {
  return (
    <Canvas>
      <color attach="background" args={["#05001d"]} />
      <PerspectiveCamera makeDefault position={[0, 0, -78]} fov={13} />
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
      <CameraRig />

      <EffectComposer>
        <Bloom luminanceThreshold={0.2} intensity={2} levels={5} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}

export { Scene };
