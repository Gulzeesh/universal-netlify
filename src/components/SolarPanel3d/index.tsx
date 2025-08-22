'use client';
import { useRef, memo, useMemo, Suspense, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Center,
  Html,
  useGLTF,
  Sky,
  Loader,
} from '@react-three/drei';
import {
  CircleGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  Material,
} from 'three';
import { MathUtils, Group, REVISION } from 'three';
import { KTX2Loader } from 'three-stdlib';
import { GLTF } from 'three-stdlib';
import Header from '../ui/Header';
import { HomeIcon, VerifiedIcon } from '../icons';
import Link from 'next/link';
import Button from '../ui/Button';

interface SceneProps {
  modelUrl: string;
}

interface HotspotMesh extends Mesh {
  name: string;
  uuid: string;
}

interface GLTFResult extends GLTF {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
}

interface HotspotPopupProps {
  name: string;
  description?: string;
}

const CIRCLE_RADIUS = 15;
const CIRCLE_SEGMENTS = 64;
const MODEL_SCALE = 3;
const HOTSPOT_DISTANCE_FACTOR = 18;
const ANIMATION_SPEED = 2;

const CirclePlane = memo(() => {
  const circleGeo = useMemo(
    () => new CircleGeometry(CIRCLE_RADIUS, CIRCLE_SEGMENTS),
    [],
  );
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
  const groupRef = useRef<Group>(null);

  return (
    <group ref={groupRef} position={[0, -1, 13.02]}>
      <Html as="div" center sprite transform={false} zIndexRange={[12, 0]}>
        <div className="font-dm-sans w-[250px] rounded-full bg-white px-5 py-2 text-center text-2xl font-normal text-black">
          Drag to view 360°
        </div>
      </Html>
    </group>
  );
});

const HotspotPopup = memo<HotspotPopupProps>(({ name, description }) => (
  <div className="absolute bottom-9 w-[250px] rounded-xl bg-white p-3 shadow-lg">
    <h1 className="font-dm-sans text-lg font-semibold">
      {name.replace('ui_', '').replaceAll('_', ' ')}
    </h1>
    <p className="text-black-300 text-xs">
      {description || "Pure iron's atoms are arranged in a repeating pattern"}
    </p>
  </div>
));

const GLTFModel = memo<SceneProps>(({ modelUrl }) => {
  const { gl } = useThree();
  const [clickedHotspot, setClickedHotspot] = useState<string>('');
  const highlightMeshesRef = useRef<MeshBasicMaterial[]>([]);

  const { scene, nodes } = useGLTF(modelUrl, true, false, (loader) => {
    const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
    const ktx2Loader = new KTX2Loader().setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`,
    );
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  }) as GLTFResult;

  useMemo(() => {
    const meshes: MeshBasicMaterial[] = [];

    Object.values(nodes).forEach((node) => {
      if (node.type === 'Mesh' && node.name.startsWith('highlight')) {
        const mesh = node as Mesh;
        const material = new MeshBasicMaterial({
          color: '#0085b2',
          transparent: true,
          opacity: 0.3,
        });
        mesh.material = material;
        meshes.push(material);
      }
    });

    highlightMeshesRef.current = meshes;
    return meshes;
  }, [nodes]);

  const hotspots = useMemo(() => {
    return Object.values(nodes).filter(
      (node): node is HotspotMesh =>
        node.type === 'Mesh' && node.name.startsWith('ui_'),
    );
  }, [nodes]);

  const handleHotspotClick = useCallback((uuid: string) => {
    setClickedHotspot((prev) => (prev === uuid ? '' : uuid));
  }, []);

  useFrame(({ clock }) => {
    const t = (clock.elapsedTime / ANIMATION_SPEED) * Math.PI * 2;
    const alpha = (Math.sin(t) + 1) / 2;
    const opacity = MathUtils.lerp(0.3, 1.0, alpha);

    highlightMeshesRef.current.forEach((material) => {
      material.opacity = opacity;
    });
  });

  return (
    <Center top castShadow receiveShadow position-y={0.1} scale={MODEL_SCALE}>
      <primitive object={scene} castShadow receiveShadow />

      {hotspots.map((mesh) => (
        <Html
          key={mesh.uuid}
          position={[mesh.position.x, mesh.position.y, mesh.position.z]}
          distanceFactor={HOTSPOT_DISTANCE_FACTOR}
          center
          className="relative"
        >
          <div
            onClick={() => handleHotspotClick(mesh.uuid)}
            className="relative flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white transition-transform before:absolute before:h-8 before:w-8 before:rounded-full before:border-[2px] before:border-white hover:scale-110"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleHotspotClick(mesh.uuid);
              }
            }}
            aria-label={`View details for ${mesh.name.replace('ui_', '').replaceAll('_', ' ')}`}
          >
            {mesh.uuid === clickedHotspot && <HotspotPopup name={mesh.name} />}
          </div>
        </Html>
      ))}
    </Center>
  );
});

const Plan3d = memo<SceneProps>(({ modelUrl }) => {
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
        gl={{
          antialias: true,
        }}
        camera={{ position: [0, 5, 50], fov: 35, near: 0.1, far: 1000 }}
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

        <Environment
          preset="studio"
          environmentIntensity={1.5}
          environmentRotation={[0, 10, 0]}
        />

        <Suspense fallback={null}>
          <group position={[0, -4, 0]}>
            <GLTFModel modelUrl={modelUrl} />
            <CirclePlane />
            <Button360 />
          </group>
        </Suspense>

        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          maxDistance={40}
          minDistance={10}
          enableRotate
          enableZoom
          enablePan={false}
          makeDefault
          dampingFactor={0.1}
          enableDamping
        />
      </Canvas>

      <Loader containerStyles={{ background: 'transparent' }} />
    </>
  );
});

CirclePlane.displayName = 'CirclePlane';
Button360.displayName = 'Button360';
HotspotPopup.displayName = 'HotspotPopup';
GLTFModel.displayName = 'GLTFModel';
Plan3d.displayName = 'Plan3d';

export default Plan3d;
