/*
 * @Date: 2025-01-10 16:25:43
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-01-17 11:49:26
 * @FilePath: \threeStudy\threeUtils.js
 * @Description: 
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 创建3D场景对象Scene
let scene;
export const createScene = () => {
  return scene || (scene = new THREE.Scene())
}

// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度


// 创造3d场景相机
let camera
export const createCamera = () => {
  // 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
  if(!camera){
    camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
    camera.lookAt(0, 0, 0); //坐标原点
  }
  return camera
}

// 根据需要设置相机位置具体值
export const createCameraAndPos = (x = 300, y = 300, z = 300) => {
  camera = createCamera();
  camera.position.set(x, y, z);
  camera.lookAt(0, 0, 0); //坐标原点
  return camera
}
//相机观察目标指向Threejs 3D空间中某个位置
// camera.lookAt(0, 0, 0); //坐标原点

//辅助观察的坐标系
export const createAxesHelper = () => {
  const axesHelper = new THREE.AxesHelper(200);
  createScene().add(axesHelper);
}

// 创建网格
export const createMesh = (color = 0xbe3131, Geometry = THREE.SphereGeometry, ...rest) => {
  const geometry = new Geometry(...rest);
  const material = new THREE.MeshBasicMaterial({
    color: color,
  });
  const mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh); 
  return mesh;
}
// 创建网格并添加到场景中
export const createMeshAndAdd = (color, Geometry = THREE.SphereGeometry, ...rest) => {
  const mesh = createMesh(color, Geometry, ...rest);
  scene.add(mesh);
  return mesh;
}

// 创建渲染器对象
let renderer
// 创建渲染器对象
const createRenderer = () => {
  if (!renderer) {
    renderer = new THREE.WebGLRenderer()
  }
  return renderer
}

// 渲染
export const render = (...rest) => {
  const renderer = createRenderer();
  const scene = createScene();
  const camera = createCamera();
  if (!rest.length) {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
    renderer.setClearColor(0x444444, 1); //设置背景颜色
    // 设置相机控件轨道控制器OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    document.body.appendChild(renderer.domElement);
  }
  
  renderer.render(scene, camera); //执行渲染操作
  requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}


