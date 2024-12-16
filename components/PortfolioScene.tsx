'use client'

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

interface FloatingLogoProps {
  imagePath: string
  scale?: number
  bounceSpeed?: number
  rotationSpeed?: number
}

const FloatingLogo: React.FC<FloatingLogoProps> = ({
  imagePath,
  scale = 0.7,
  bounceSpeed = 1.5,
  rotationSpeed = 0.8
}) => {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const { viewport } = useThree()
  const { theme } = useTheme()

  const texture = useTexture(imagePath, (texture) => {
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    texture.anisotropy = 16
    setLoaded(true)
  })

  const aspectRatio = texture.image ? texture.image.width / texture.image.height : 1
  const width = scale
  const height = width / aspectRatio

  useFrame((state) => {
    if (loaded) {
      const time = state.clock.getElapsedTime()
      mesh.current.position.y = Math.sin(time * bounceSpeed) * 0.15
      mesh.current.position.x = Math.cos(time * (bounceSpeed * 0.8)) * 0.1
      mesh.current.rotation.z = Math.sin(time * rotationSpeed) * 0.05
    }
  })

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? [width * 1.1, height * 1.1, 1] : [width, height, 1]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        opacity={loaded ? 1 : 0} 
        color={theme === 'dark' ? 0xCCCCCC : 0xFFFFFF}
      />
    </mesh>
  )
}

interface PortfolioSceneProps {
  imagePath: string
  scale?: number
  bounceSpeed?: number
  rotationSpeed?: number
}

const PortfolioScene: React.FC<PortfolioSceneProps> = (props) => {
  const { theme } = useTheme()

  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
      <color attach="background" args={[theme === 'dark' ? '#1a1a1a' : '#f0f0f0']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingLogo {...props} />
    </Canvas>
  )
}

export default PortfolioScene

