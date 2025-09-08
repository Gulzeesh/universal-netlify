'use client';
import { useRef, memo, useMemo, Suspense, useState, useEffect } from 'react';
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
  MeshStandardMaterial,
  Object3D,
  Material,
} from 'three';
import { MathUtils, REVISION } from 'three';
import { KTX2Loader } from 'three-stdlib';
import { GLTF } from 'three-stdlib';
import Header from '../ui/Header';
import Image from 'next/image';
import Tag from '../ui/Tag';
import { LABELS } from '@/data/constant';

interface SceneProps {
  modelUrl: string;
  highLightClicked: null | number;
  setHighLightClicked: React.Dispatch<React.SetStateAction<null | number>>;
}

interface GLTFResult extends GLTF {
  nodes: Record<string, Object3D>;
  materials: Record<string, Material>;
}

const CIRCLE_RADIUS = 4.4;
const CIRCLE_SEGMENTS = 64;
const HOTSPOT_DISTANCE_FACTOR = 8;
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
      geometry={circleGeo}
      material={circleMat}
    />
  );
});

const GLTFModel = memo<SceneProps>(({ setHighLightClicked, modelUrl }) => {
  const { gl } = useThree();
  const [clickedHotspot, setClickedHotspot] = useState<string>('');

  const { scene, nodes } = useGLTF(modelUrl, true, false, (loader) => {
    const THREE_PATH = `https://unpkg.com/three@0.${REVISION}.x`;
    const ktx2Loader = new KTX2Loader().setTranscoderPath(
      `${THREE_PATH}/examples/jsm/libs/basis/`,
    );
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  }) as GLTFResult;

  const meshes = useMemo(() => {
    const groupedMeshes: Array<{
      index: number;
      highlight?: Mesh;
      ui?: Mesh;
    }> = [];

    Object.values(nodes).forEach((node) => {
      if (node.type === 'Mesh') {
        const mesh = node as Mesh;
        let index: number | null = null;

        if (mesh.name.startsWith('highlight_')) {
          index = parseInt(mesh.name.split('_')[1]) - 1;
          (mesh.material as MeshStandardMaterial).transparent = true;

          if (!groupedMeshes[index]) {
            groupedMeshes[index] = { index };
          }
          groupedMeshes[index].highlight = mesh;
        } else if (mesh.name.startsWith('ui_')) {
          index = parseInt(mesh.name.split('_')[1]) - 1;
          (mesh.material as MeshStandardMaterial).transparent = true;
          (mesh.material as MeshStandardMaterial).opacity = 0;
          if (!groupedMeshes[index]) {
            groupedMeshes[index] = { index };
          }
          groupedMeshes[index].ui = mesh;
        }
      }
    });

    return groupedMeshes;
  }, [nodes]);

  useFrame(({ clock }) => {
    const t = (clock.elapsedTime / ANIMATION_SPEED) * Math.PI * 2;
    const alpha = (Math.sin(t) + 1) / 2;
    const opacity = MathUtils.lerp(0.3, 1.0, alpha);

    meshes.forEach((mesh) => {
      if (mesh.highlight) {
        if (mesh.ui?.uuid === clickedHotspot) {
          (mesh.highlight?.material as MeshStandardMaterial).opacity = opacity;
        } else {
          (mesh.highlight?.material as MeshStandardMaterial).opacity = 0;
        }
      }
    });
  });

  return (
    <Center top position-y={0.1}>
      <primitive object={scene} />

      {meshes.map((mesh) => (
        <Html
          key={mesh.index}
          position={[
            (mesh.ui as Mesh).position.x + 0.05,
            (mesh.ui as Mesh).position.y + 0.05,
            (mesh.ui as Mesh).position.z + 0.05,
          ]}
          distanceFactor={HOTSPOT_DISTANCE_FACTOR}
          center

          className="relative"
        >
          <div
            className="relative flex size-5"
            onClick={() => (
              setClickedHotspot((mesh.ui as Mesh)?.uuid),
              setHighLightClicked(mesh.index)
            )}
          >
            <span className="bg-primary-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary-500 relative inline-flex size-5 rounded-full"></span>
          </div>
        </Html>
      ))}
    </Center>
  );
});

const Plan3d = memo(({ modelUrl }: { modelUrl: string }) => {
  const [isIdle, setIsIdle] = useState(false);
  const [highLightClicked, setHighLightClicked] = useState<null | number>(null);
  const idleTimeout = useRef<NodeJS.Timeout | null>(null);
  const IDLE_DELAY = 3000;

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const handleActivity = () => {
      setIsIdle(false);
      setHighLightClicked(null);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setIsIdle(true), IDLE_DELAY);
    };

    ['mousemove', 'mousedown', 'touchstart', 'wheel'].forEach((event) => {
      canvas.addEventListener(event, handleActivity);
    });

    handleActivity();

    return () => {
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      ['mousemove', 'mousedown', 'touchstart', 'wheel'].forEach((event) => {
        canvas.removeEventListener(event, handleActivity);
      });
    };
  }, []);

  return (
    <>
      <Header
        content={{
          title: [{ text: `India's Safest & Strongest Solar️` }],
          description:
            'See how smart design makes us stronger, safer, and more reliable than local structures.',
        }}
        className="absolute top-0 z-30 w-full px-16 pt-4 [&>img:last-child]:opacity-0"
        style={{ zoom: 0.59 }}
      />

      {isIdle && (
        <div
          className="pointer-events-none absolute bottom-25 z-30 flex w-full flex-col items-center justify-center gap-2"
          style={{ zoom: 0.67 }}
        >
          <Image
            src={'/finger-click.gif'}
            width={150}
            height={150}
            alt="nudge gif"
            className="translate-y-8"
          />
          <h1 className="font-dm-sans text-2xl font-normal mix-blend-darken">
            Drag to view 360°
          </h1>
        </div>
      )}

      {highLightClicked !== null && LABELS[highLightClicked] && (
        <Tag
          className={`absolute top-1/3 ${LABELS[highLightClicked].position === 'right' ? 'right-20' : 'left-20'} z-30`}
          title={LABELS[highLightClicked].title}
        >
          {LABELS[highLightClicked].children}
        </Tag>
      )}

      <Canvas
        shadows={false}  
        gl={{
          antialias: true,
        }}
  
        camera={{ position: [0, 1, 13], fov: 35, near: 0.1, far: 1000 }}
        className="h-screen w-full"
      >
        <color attach="background" args={['white']} />

        <Environment
          files={'/qwantani_morning_puresky_1k.hdr'}
          environmentIntensity={3}
          environmentRotation={[0, 1, 13]}
          background
        />
        {/* <ambientLight intensity={20} color={0xffffff} /> */}
        
        <Suspense fallback={null}>
          <group position={[0, -1.5, 0]}>
            <GLTFModel
              modelUrl={modelUrl}
              setHighLightClicked={setHighLightClicked}
              highLightClicked={highLightClicked}
            />
            <CirclePlane />
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
GLTFModel.displayName = 'GLTFModel';
Plan3d.displayName = 'Plan3d';

export default Plan3d;
