import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import * as THREE from "three";
import { useEffect } from 'react';

function App() {
  // Scene 
  const scene = new THREE.Scene();

  // Create Sphere 
  const geometry = new THREE.SphereGeometry(3, 64, 64); // skeleton
  const material = new THREE.MeshStandardMaterial({ // skin 
      color: '#00ff83'
  }); 

  // Mesh - combines geoemetry and material
  const mesh = new THREE.Mesh(geometry, material); 
  scene.add(mesh);

  // Light 
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(0,10,10);
  scene.add(light);

  // Camera
  const camera = new THREE.PerspectiveCamera(45, 800 / 600);
  camera.position.z = 20
  scene.add(camera);

  useEffect(() => {
    // Canvas and Renderer 
    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(800,600);
    renderer.render(scene, camera)
  }, []);

  return (
    <div>
      <canvas class="webgl"></canvas>
    </div>
  )
}

export default App
