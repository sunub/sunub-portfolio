import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 10,
        (1 + state.pointer.y) / 2,
        -78,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <></>;
}

export { CameraRig };
