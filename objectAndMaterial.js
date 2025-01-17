/*
 * @Description: 
 * @FilePath: \threeStudy\objectAndMaterial.js
 * @Date: 2024-12-07 16:20:04
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-01-17 16:15:14
 * @author: Lin_kangjing
 */

import * as THREE from 'three';
//new THREE.Vector3()实例化一个三维向量对象
const v3 = new THREE.Vector3(0,0,0);
// console.log('v3', v3);
v3.set(10,0,0);//set方法设置向量的值
v3.x = 100;//访问x、y或z属性改变某个分量的值

const mesh = new THREE.Mesh()
console.log('模型位置属性.position的值', mesh.position);

//向量Vector3对象表示方向
const axis = new THREE.Vector3(1, 1, 1);
console.log('axis',axis)
axis.normalize(); //向量归一化, 也就是说，将该向量的方向设置为和原向量相同，但是其长度
console.log('axis',axis)
//沿着axis轴表示方向平移100
mesh.translateOnAxis(axis, 100);