import fs from 'fs';

// Read glb
const file = fs.readFileSync('public/models/formula_student.glb');
// find the JSON chunk
let magic = file.readUInt32LE(0);
if (magic === 0x46546C67) {
  let jsonChunkLength = file.readUInt32LE(12);
  let jsonChunkType = file.readUInt32LE(16);
  if (jsonChunkType === 0x4E4F534A) {
    let jsonBuffer = file.subarray(20, 20 + jsonChunkLength);
    let gltf = JSON.parse(jsonBuffer.toString('utf8'));
    console.log("Meshes:");
    gltf.meshes?.forEach((m, i) => console.log(i, m.name));
    console.log("Nodes:");
    gltf.nodes?.forEach((n, i) => {
      if (n.mesh !== undefined) console.log(`Node ${i} (${n.name}) -> Mesh ${n.mesh}`);
    });
  }
}
