/*
 * @Description: 
 * @FilePath: \three\bufferGeometry.js
 * @Date: 2024-12-07 16:03:36
 * @LastEditors: Lin_kangjing
 * @LastEditTime: 2024-12-16 19:55:41
 * @author: Lin_kangjing
 */
import * as THREE from 'three';// 引入轨道控制器扩展库OrbitControls.js
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 创建3D场景对象Scene
const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(70, 70, 70); 
const geometry = new THREE.SphereGeometry(70, 70, 70); 
//创建一个材质对象Material
const material = new THREE.MeshPhongMaterial({
// const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,//0xff0000设置材质颜色为红色
  shininess: 20, //高光部分的亮度，默认30
  specular: 0xfffffff, //高光部分的颜色
  // transparent:true,//开启透明
  // opacity:0.5,//设置透明度
}); 
// 两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); // width和height用来设置Three.js输出的Canvas画布尺寸(像素px)

const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(300, 300, 300); 
//相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0); //坐标原点

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(350);
scene.add(axesHelper);

//点光源：两个参数分别表示光源颜色和光照强度
// 参数1：0xffffff是纯白光,表示光源颜色
// 参数2：1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.decay = 0.0;//设置光源不随距离衰减
// 你可以对比不同光照强度明暗差异(传播同样距离)
// pointLight.intensity = 10000.0;//光照强度
// pointLight.intensity = 50000.0;//光照强度
//点光源位置
pointLight.position.set(150, 150, 150);//点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中
// 光源辅助观察
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
scene.add(pointLightHelper);


// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.setClearColor(0x444444, 1); //设置背景颜色

// renderer.render(scene, camera); //执行渲染操作
document.body.appendChild(renderer.domElement);

// 渲染函数
function render() {
    renderer.render(scene, camera); //执行渲染操作
    // mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);//请求再次执行渲染函数render，渲染下一帧
}
render();

// onresize 事件会在窗口被调整大小时发生
window.onresize = function () {
  // 重置渲染器输出画布canvas尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
  camera.aspect = window.innerWidth / window.innerHeight;
  // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
  // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
  // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
  camera.updateProjectionMatrix();
};



// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', function () {
    // renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件









// const geometry = new THREE.PlaneGeometry(100,50); //矩形平面几何体
// // const geometry = new THREE.BoxGeometry(50,50,50); //长方体

// console.log('几何体',geometry);
// console.log('顶点位置数据',geometry.attributes.position);
// console.log('顶点索引数据',geometry.index);

// const material = new THREE.MeshLambertMaterial({
//   color: 0x00ffff, 
//   wireframe:true,//线条模式渲染mesh对应的三角形数据
// });

// console.log(material)
