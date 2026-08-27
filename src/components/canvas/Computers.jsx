import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isSmallMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  const modelScale = isSmallMobile ? 0.45 : isMobile ? 0.58 : 0.75;
  const modelPosition = isSmallMobile
    ? [-0.7, -3.0, -1.2]
    : isMobile
    ? [-0.4, -3.1, -1.3]
    : [0, -3.25, -1.5];

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={modelScale}
        position={modelPosition}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    // Add listeners for changes to screen size
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const smallMobileQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mobileQuery.matches);
    setIsSmallMobile(smallMobileQuery.matches);

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleSmallMobileChange = (event) => {
      setIsSmallMobile(event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileChange);
    smallMobileQuery.addEventListener("change", handleSmallMobileChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      smallMobileQuery.removeEventListener("change", handleSmallMobileChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isSmallMobile={isSmallMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
