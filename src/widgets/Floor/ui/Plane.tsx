function Plane() {
  return (
    <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export { Plane };
