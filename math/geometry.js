/*
 * @Date: 2025-01-10 16:33:21
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-01-10 16:34:58
 * @FilePath: \threeStudy\math\geometry.js
 * @Description: 
 */

import * as THREE from 'three';
const A = new THREE.Vector3(0, 30, 0);//A点
const B = new THREE.Vector3(80, 0, 0);//B点

// 绿色小球可视化A点位置
const AMesh = createSphereMesh(0x00ff00,2);
AMesh.position.copy(A);
// 红色小球可视化B点位置
const BMesh = createSphereMesh(0xff0000,2);
BMesh.position.copy(B);

const group = new THREE.Group();
group.add(AMesh,BMesh);

function createSphereMesh(color,R) {
    const geometry = new THREE.SphereGeometry(R);
    const material = new THREE.MeshLambertMaterial({
        color: color,
    });
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}
