'use client';

import type { PropsWithChildren } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import LaptopWrapper from './wrapper';
import LaptopContent from './content';
import LaptopKeyboard from './keyboard';
import LaptopScreen from './screen';

type GLTFResult = GLTF & {
  nodes: {
    Frame_ComputerFrame_0: THREE.Mesh;
    Screen_ComputerScreen_0: THREE.Mesh;
  };
  materials: {
    ComputerFrame: THREE.MeshStandardMaterial;
    ComputerScreen: THREE.MeshStandardMaterial;
  };
};

function LaptopModel({ children }: PropsWithChildren) {
  const gltf = useGLTF('/laptop.glb') as unknown;
  const { nodes, materials } = gltf as GLTFResult;

  materials.ComputerFrame.color = new THREE.Color('rgb(53, 57, 53)');
  materials.ComputerScreen.color = new THREE.Color('rgb(53, 57, 53)');

  return (
    <LaptopWrapper>
      <LaptopContent>{children}</LaptopContent>

      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="RootNode" rotation={[Math.PI / 2, 0, 0]}>
            <LaptopKeyboard
              geometry={nodes.Frame_ComputerFrame_0.geometry}
              material={materials.ComputerFrame}
            />

            <LaptopScreen
              geometry={nodes.Screen_ComputerScreen_0.geometry}
              material={materials.ComputerScreen}
            />
          </group>
        </group>
      </group>
    </LaptopWrapper>
  );
}

useGLTF.preload('/laptop.glb');

export default LaptopModel;
