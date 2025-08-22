'use client';
import { useRef, memo, useMemo, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Center,
  Html,
  useGLTF,
  Sky,
  Loader,
} from '@react-three/drei';
import { CircleGeometry, MeshStandardMaterial } from 'three';
import { MathUtils, Group, REVISION } from 'three';
import { KTX2Loader } from 'three-stdlib';
import Header from '../ui/Header';
import { HomeIcon, VerifiedIcon } from '../icons';
import Link from 'next/link';
import Button from '../ui/Button';

interface SceneProps {
  modelUrl: string;
}

// const LineCircle = memo(() => {
//   const points = new Path()
//     .absarc(0, 0, 13.02, 0, Math.PI * 2)
//     .getSpacedPoints(128);

//   const positions: any = [];
//   const alphas: any = [];

//   points.forEach((point, index) => {
//     positions.push(point.x, point.y, 0);

//     const t = index / (points.length - 1);

//     let alpha;
//     if (t <= 0.6) {
//       alpha = t / 0.6;
//     } else if (t >= 0.7) {
//       alpha = (1.0 - t) / 0.6;
//     } else {
//       alpha = 1.0;
//     }

//     alphas.push(alpha);
//   });

//   const circleGeometry = useMemo(() => {
//     const geometry = new BufferGeometry();
//     geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
//     geometry.setAttribute('alpha', new Float32BufferAttribute(alphas, 1));
//     return geometry;
//   }, []);

//   const circleMaterial = useMemo(() => {
//     return new ShaderMaterial({
//       uniforms: {},
//       vertexShader: `
//         attribute float alpha;
//         varying float vAlpha;
        
//         void main() {
//           vAlpha = alpha;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         varying float vAlpha;
        
//         void main() {
//           vec3 color = vec3(0, 0, 0); 
//           gl_FragColor = vec4(color, vAlpha);
//         }
//       `,
//     });
//   }, []);

//   const line = useMemo(() => {
//     const lineObject = new Line(circleGeometry, circleMaterial);
//     lineObject.rotateX(MathUtils.degToRad(-90));
//     lineObject.rotateZ(MathUtils.degToRad(90));

//     return lineObject;
//   }, [circleGeometry, circleMaterial]);

//   return <primitive object={line} castShadow={false} receiveShadow={false} />;
// });

const CirclePlane = memo(() => {
  const circleGeo = useMemo(() => new CircleGeometry(15, 1000), []);
  const circleMat = useMemo(
    () => new MeshStandardMaterial({ color: '#030D17' }),
    [],
  );

  return (
    <mesh
      rotation-x={MathUtils.degToRad(-90)}
      position-y={-0.03}
      receiveShadow
      castShadow
      geometry={circleGeo}
      material={circleMat}
    />
  );
});


const Button360 = memo(() => {
  const groupRef = useRef<Group>(null!);

  return (
    <group ref={groupRef} position={[0, -1, 13.02]}>
      <Html as="div" center sprite transform={false} zIndexRange={[12, 0]}>
        <h1 className="font-dm-sans w-[250px] rounded-full bg-white px-5 py-2 text-2xl font-normal text-black">
          Drag to view 360°
        </h1>
      </Html>
    </group>
  );
});

const GLTFModel = memo(({ modelUrl }: SceneProps) => {
  const { gl } = useThree();

  const { scene } = useGLTF(modelUrl, true, false, (loader) => {
    const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
    const ktx2Loader = new KTX2Loader().setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`,
    );
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  });

  return (
    <Center top castShadow receiveShadow position-y={0.1}>
      <primitive object={scene} castShadow receiveShadow scale={3} />
    </Center>
  );
});

const Plan3d = memo(({ modelUrl }: SceneProps) => {
  return (
    <>
      <Header
        content={{
          title: [{ text: `India's Safest & Strongest Solar️` }],
          description:
            'Understand how weak structures cause long-term damage, leaks, and losses.',
        }}
        className="absolute top-0 z-30 w-full px-16 pt-4 [&>img:last-child]:opacity-0"
      />

      <div className="bg-secondary-500 absolute right-10 bottom-26 z-30 flex w-fit gap-2 rounded-full px-4 py-3">
        <VerifiedIcon />
        <p className="text-2xl font-semibold text-white">
          Tested & Approved by IIT BOMBAY
        </p>
      </div>

      <Link href="/explore" className="absolute bottom-26 left-10 z-30">
        <Button
          variant="secondary"
          content="Back to Home"
          leftIcon={<HomeIcon />}
          className="self-start"
        />
      </Link>
      <Canvas
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 5, 50], fov: 35 }}
        className="h-screen w-full"
      >
        <color attach="background" args={['white']} />

        <Sky
          turbidity={10.1}
          rayleigh={0.212}
          mieCoefficient={0.004}
          mieDirectionalG={0.928}
          sunPosition={[0, 10.3, 0]}
          azimuth={-151.9}
        />

        <Environment preset="studio" environmentIntensity={1.5} />
        <Suspense fallback={null}>
          <group position={[0, -4, 0]}>
            <GLTFModel modelUrl={modelUrl} />
            <CirclePlane />
            {/* <LineCircle /> */}
            <Button360 />
          </group>
        </Suspense>

        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          maxDistance={40}
          minDistance={15}
          enableRotate
          enableZoom={true}
          enablePan={false}
          makeDefault
        />
      </Canvas>
      <Loader />
    </>
  );
});

CirclePlane.displayName = 'CirclePlane';
Button360.displayName = 'Button360';
GLTFModel.displayName = 'GLTFModel';
Plan3d.displayName = 'Plan3d';

export default Plan3d;
