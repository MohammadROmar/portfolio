import { Mesh, MeshStandardMaterial } from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Frame_ComputerFrame_0: Mesh;
    Screen_ComputerScreen_0: Mesh;
  };
  materials: {
    ComputerFrame: MeshStandardMaterial;
    ComputerScreen: MeshStandardMaterial;
  };
};

export function Model() {
  const gltf = useGLTF('/scene.gltf') as unknown;
  const { nodes, materials } = gltf as GLTFResult;

  return (
    <group dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="6d4c164f62674ba9b12714fec0584379fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group
                name="Frame"
                position={[0, 0.976, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="Frame_ComputerFrame_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Frame_ComputerFrame_0.geometry}
                  material={materials.ComputerFrame}
                />
              </group>
              <group
                name="Screen"
                position={[0, 0.65, -10.3]}
                rotation={[Math.PI, 0, -Math.PI]}
                scale={[100, 100, 88.235]}
              >
                <mesh
                  name="Screen_ComputerScreen_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Screen_ComputerScreen_0.geometry}
                  material={materials.ComputerScreen}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
