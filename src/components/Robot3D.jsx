import React, { useRef } from "react";
import { useGLTF, useFrame } from "@react-three/drei";

export default function Robot3D(props) {
  const model = useGLTF("/robot.glb"); // Mets ton fichier dans /public
  const ref = useRef();

  // Rotation automatique
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={2}
      position={[0, -1, 0]}
      {...props}
    />
  );
}
