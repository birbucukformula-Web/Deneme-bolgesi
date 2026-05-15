import fs from 'fs';

const file = fs.readFileSync('public/models/formula_student.glb');
let magic = file.readUInt32LE(0);
if (magic === 0x46546C67) {
  let jsonLength = file.readUInt32LE(12);
  let jsonBuffer = file.subarray(20, 20 + jsonLength);
  let gltf = JSON.parse(jsonBuffer.toString('utf8'));
  
  let accessors = gltf.accessors;
  let min = [Infinity, Infinity, Infinity];
  let max = [-Infinity, -Infinity, -Infinity];
  
  gltf.meshes.forEach(m => {
    m.primitives.forEach(p => {
      if (p.attributes.POSITION !== undefined) {
        let acc = accessors[p.attributes.POSITION];
        if (acc.min && acc.max) {
          for(let i=0; i<3; i++) {
            if (acc.min[i] < min[i]) min[i] = acc.min[i];
            if (acc.max[i] > max[i]) max[i] = acc.max[i];
          }
        }
      }
    });
  });
  
  console.log("Min:", min);
  console.log("Max:", max);
  console.log("Size:", [max[0]-min[0], max[1]-min[1], max[2]-min[2]]);
}
