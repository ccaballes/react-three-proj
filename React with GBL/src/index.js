import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Cloud} from "@react-three/drei";
import "./styles.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from '@react-three/fiber'
import scene from "./assets/watch.glb"
import { Suspense } from 'react';

function Watch(){
		const gltf = useLoader(GLTFLoader, scene);
		return (
		  <>
			<primitive object={gltf.scene} scale={45} />
		  </>
);
}

createRoot(document.getElementById('root')).render(
	<Canvas>
		<OrbitControls />
		<Cloud
			opacity={0.5}
			speed={0.5} 
			width={20} 
			depth={1.0} 
			segments={30} 
		/>
		<Suspense fallback={null}>
			<Watch/>
		</Suspense>
		<ambientLight intensity={0.5} /> 
		<spotLight position={[10, 15, 10]} angle={0.3} />
	</Canvas>
);