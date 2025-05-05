'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PointerLockControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { PointerLockControls as PointerLockControlsImpl } from 'three-stdlib';

interface Props {
  modelUrl: string;
}

function Model({ modelUrl }: { modelUrl: string }) {
  const gltf = useGLTF(modelUrl);
  return <primitive object={gltf.scene} scale={[1, 1, 1]} />;
}

export default function ThreeDViewer({ modelUrl }: Props) {
  const [isLocked, setIsLocked] = useState(false);
  const [isPointerLockSupported, setIsPointerLockSupported] = useState(true);

  const pointerLockRef = useRef<PointerLockControlsImpl | null>(null); // ✅ Fix

  useEffect(() => {
    const isSupported =
      'pointerLockElement' in document ||
      'mozPointerLockElement' in document ||
      'webkitPointerLockElement' in document;
    setIsPointerLockSupported(isSupported);

    if (!isSupported) {
      console.warn('Brauzeringiz Pointer Lock API ni qo‘llab-quvvatlamaydi.');
    }
  }, []);

  const handleLock = () => {
    if (pointerLockRef.current && isPointerLockSupported) {
      try {
        pointerLockRef.current.lock();
      } catch (err) {
        console.error('Pointer Lock API ni ishlatishda xato:', err);
      }
    }
  };

  const handleUnlock = () => {
    if (pointerLockRef.current && isPointerLockSupported) {
      try {
        pointerLockRef.current.unlock();
      } catch (err) {
        console.error('Pointer Lock API dan chiqishda xato:', err);
      }
    }
  };

  useEffect(() => {
    const pointerLock = pointerLockRef.current;
    if (!pointerLock || !isPointerLockSupported) return;
  
    const onLock = () => setIsLocked(true);
    const onUnlock = () => setIsLocked(false);
  
    pointerLock.addEventListener('lock', onLock);
    pointerLock.addEventListener('unlock', onUnlock);
  
    return () => {
      pointerLock.removeEventListener('lock', onLock);
      pointerLock.removeEventListener('unlock', onUnlock);
    };
  }, [isPointerLockSupported]);
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg"
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 60 }}
        onCreated={({ gl }) => {
          gl.setClearColor('#ffffff');
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model modelUrl={modelUrl} />
        {isPointerLockSupported && <PointerLockControls ref={pointerLockRef} />}
        <OrbitControls enablePan={!isLocked} enableZoom={!isLocked} enableRotate={!isLocked} />
      </Canvas>

      <div className="absolute bottom-4 left-4 flex gap-4">
        {isPointerLockSupported ? (
          !isLocked ? (
            <button
              onClick={handleLock}
              className="bg-[#1a3c34] text-white px-4 py-2 rounded hover:bg-[#d4a017] transition font-['Noto_Naskh_Arabic']"
            >
              Masjidga Kirish
            </button>
          ) : (
            <button
              onClick={handleUnlock}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Chiqish
            </button>
          )
        ) : (
          <div className="bg-yellow-500 text-black px-4 py-2 rounded">
            Pointer Lock API qo`llab-quvvatlanmaydi. Iltimos, boshqa brauzerdan foydalaning.
          </div>
        )}
      </div>
    </motion.div>
  );
}
