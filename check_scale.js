import fs from 'fs';

const file = fs.readFileSync('public/models/formula_student.glb');
let magic = file.readUInt32LE(0);
if (magic === 0x46546C67) {
  let jsonLength = file.readUInt32LE(12);
  let jsonBuffer = file.subarray(20, 20 + jsonLength);
  let gltf = JSON.parse(jsonBuffer.toString('utf8'));
  console.log("Root nodes:", gltf.scenes[0].nodes);
  gltf.scenes[0].nodes.forEach(n => {
    console.log("Node", n, "scale:", gltf.nodes[n].scale);
  });
}
