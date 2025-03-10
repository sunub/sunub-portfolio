import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Plane } from "./Plane";
import { getTweakPane } from "@/shared/utils/tweakPane";

type MeshPos = {
  mesh: {
    x: number;
    y: number;
    z: number;
  };
};

function Floor() {
  const [meshPos, setMeshPos] = useState<MeshPos>({
    mesh: {
      x: 0,
      y: 0.5,
      z: 0,
    },
  });

  useEffect(() => {
    const pane = getTweakPane();
    pane.addBinding(meshPos, "mesh", {
      x: { min: -10, max: 10 },
      y: { min: -10, max: 10 },
      z: { min: -10, max: 10 },
    });

    pane.on("change", () => {
      setMeshPos({ ...meshPos });
    });
  }, [meshPos]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [-15, 15, 18], fov: 35 }}
      gl={{ alpha: false }}
    >
      <directionalLight
        castShadow
        intensity={2}
        position={[10, 6, 6]}
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera
          attach="shadow-camera"
          left={-20}
          right={20}
          top={20}
          bottom={-20}
        />
      </directionalLight>
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <mesh
        castShadow
        receiveShadow
        position={[meshPos.mesh.x, meshPos.mesh.y, meshPos.mesh.z]}
      >
        <meshStandardMaterial color={"red"} />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <Plane />
    </Canvas>
  );
}

export { Floor };
