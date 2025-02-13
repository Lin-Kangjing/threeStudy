/*
 * @Date: 2025-01-17 16:15:11
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-02-13 09:53:12
 * @FilePath: \threeStudy\hierarchicalModel.js
 * @Description: 
 */
import * as THREE from 'three';
import { createCameraAndPos, createMeshAndAdd, createMesh, render, createAxesHelper, createScene } from "./threeUtils";

const scene = createScene()
const camera = createCameraAndPos(400,400,400)
createAxesHelper()
render()

// 批量创建多个长方体表示高层楼
const group1 = new THREE.Group(); //所有高层楼的父对象
group1.name = "高层";
for (let i = 0; i < 1; i++) {
    const geometry = new THREE.BoxGeometry(50, 50, 50);
    // geometry.translate(50/2,0,0,)
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30; // 网格模型mesh沿着x轴方向阵列
    // .rotateY()默认绕几何体中心旋转，经过上面几何体平移变化，你会发现.rotateY()是绕长方体面上一条线旋转
    mesh.rotateY(Math.PI/3);
    group1.add(mesh); //添加到组对象group1
    mesh.name = i + 1 + '号楼';
    // console.log('mesh.name',mesh.name);
}
group1.position.y = 30;

const group2 = new THREE.Group();
group2.name = "洋房";
// 批量创建多个长方体表示洋房
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 30, 10);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30;
    group2.add(mesh); //添加到组对象group2
    mesh.name = i + 6 + '号楼';
}
group2.position.z = 50;
group2.position.y = 15;

const model = new THREE.Group();
model.name='小区房子';
// model.add(group1, group2);
model.add(group1);
// model.position.set(-50,0,-25);
model.position.set(0,0,0);

scene.add(model);

// 声明一个三维向量用来表示某个坐标
const worldPosition = new THREE.Vector3();
// 获取mesh的世界坐标，你会发现mesh的世界坐标受到父对象group的.position影响
group1.getWorldPosition(worldPosition);
console.log('世界坐标',worldPosition);
console.log('本地坐标',group1.position);

//可视化mesh的局部坐标系
// const meshAxesHelper = new THREE.AxesHelper(50);
// group1.add(meshAxesHelper);
