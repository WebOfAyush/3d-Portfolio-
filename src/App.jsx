import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';

function App() {
  return (
    <Canvas
      style={{ height: '100vh',width:'100vw', background: '#f0f0f0' }}
      camera={{ position: [0, 1, 5], fov: 75 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />

      {/* Introduction */}
      <Text position={[0, 2, 0]} fontSize={0.5} color="black">
        Hi, I'm Ayush Bairagi
      </Text>
      <Text position={[0, 1.5, 0]} fontSize={0.3} color="black">
        Full Stack MERN Developer
      </Text>

      {/* Skills */}
      <Text position={[-4, 1, -3]} fontSize={0.3} color="blue">
        MongoDB
      </Text>
      <Box position={[-4, 0, -3]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="lightblue" />
      </Box>

      <Text position={[-2, 1, -3]} fontSize={0.3} color="green">
        Express
      </Text>
      <Box position={[-2, 0, -3]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="lightgreen" />
      </Box>

      <Text position={[0, 1, -3]} fontSize={0.3} color="orange">
        React
      </Text>
      <Box position={[0, 0, -3]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>

      <Text position={[2, 1, -3]} fontSize={0.3} color="purple">
        Node.js
      </Text>
      <Box position={[2, 0, -3]} args={[1, 1, 1]}>
        <meshStandardMaterial attach="material" color="purple" />
      </Box>
      {/* Orbit Controls to rotate around */}
      <OrbitControls target={[0, 0, 0]} enableZoom={true} enablePan={false} enableRotate={true} />
    </Canvas>
  );
}

export default App;
