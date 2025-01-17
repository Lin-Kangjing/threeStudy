/*
 * @Date: 2025-01-10 16:33:21
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-01-17 14:58:28
 * @FilePath: \threeStudy\math\geometry.js
 * @Description: 
 */

import * as THREE from 'three';
import { createCameraAndPos, createMeshAndAdd, createMesh, render, createAxesHelper, createScene } from "../threeUtils";

const scene = createScene()
const camera = createCameraAndPos(400,400,400)
createAxesHelper()
render()

// 三角函数
const R = 100;//半径长度
const N = 10
const sp = Math.PI / N;//弧度
const group = new THREE.Group()
for (let i = 0; i < N; i++) {
    const angle = sp * i
    const x = R * Math.cos(angle)
    const y = R * Math.sin(angle)
    const mesh = createMesh(0x00ff00, THREE.SphereGeometry, 3)
    mesh.position.set(x, y, 0)
    group.add(mesh)
}

scene.add(group);
