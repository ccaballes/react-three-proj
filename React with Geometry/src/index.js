import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import "./styles.css";


function Sphere() {
	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 2, 0);
			}}
			ref={ref}
			position={[0, 2, 0]}
		>
			<sphereBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="blue" />
		</mesh>
	);
}

function Plane() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
			<planeBufferGeometry attach="geometry" args={[100, 100]} />
			<meshPhongMaterial attach="material" color="transparent" />
		</mesh>
	);
}

createRoot(document.getElementById('root')).render(
	<Canvas>
		<OrbitControls />
		<Sky sunPosition={[100, 20, 100]} />
		<ambientLight intensity={0.8} />
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<Physics>
			<Sphere />
			<Plane />
		</Physics>
	</Canvas>
);