import { useRef } from "react";
import { Points, Group } from "three";
import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function CustomStars() {
  const starsRef = useRef<Points>(null!);
  const groupRef = useRef<Group>(null!);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = -t * 0.005;
    groupRef.current.position.y = Math.sin(t * 0.2) * 0.2;
  });

  return (
    <group ref={groupRef}>
      <Stars
        ref={starsRef}
        radius={20}
        depth={10}
        count={5000}
        factor={4}
        saturation={2}
        fade
        speed={1}
      />
    </group>
  );
}

export { CustomStars };
