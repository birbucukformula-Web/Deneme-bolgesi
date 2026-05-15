import React, { useEffect } from 'react';
import * as THREE from 'three';

export function BoxLogger({ scene }) {
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = new THREE.Vector3();
      box.getSize(size);
      console.log('--- MODEL ACTUAL RENDERED SIZE ---');
      console.log('Size:', size);
      console.log('Center:', box.getCenter(new THREE.Vector3()));
      console.log('Min:', box.min);
      console.log('Max:', box.max);
    }
  }, [scene]);
  return null;
}
