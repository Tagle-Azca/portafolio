import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Head() {
    const containerRef = useRef(null);

useEffect(() => {
    const container = containerRef.current;

    // Three.js setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight);
    camera.position.set(0, 0, 10);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Enable alpha for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight('red', 2.5);
    light.position.set(1.2, 0, -1);
    scene.add(light);

    const light2 = new THREE.DirectionalLight('blue', 2.5);
    light2.position.set(-1.2, 0, -1);
    scene.add(light2);

    let head = new THREE.Object3D();

    new GLTFLoader().load('https://boytchev.github.io/etudes/threejs/negative-morphs/LeePerrySmith.glb', (gltf) => {
        head = gltf.scene.children[0];
        head.geometry.scale(0.3, 0.3, 0.3);
        head.material = new THREE.MeshPhysicalMaterial({
    });

        scene.add(head);
    });

        function animationLoop(t) {
        head.rotation.y = t / 2000;
        renderer.render(scene, camera);
    }

        function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    renderer.setAnimationLoop(animationLoop);

    return () => {
        window.removeEventListener('resize', onWindowResize);
        renderer.setAnimationLoop(null);
    };
}, []);

    return <div ref={containerRef} />;
}

export default Head;
