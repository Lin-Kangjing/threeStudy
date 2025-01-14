/*
 * @Date: 2025-01-10 16:25:43
 * @LastEditors: LinKangjing linkangjing@foxmail.com
 * @LastEditTime: 2025-01-14 14:55:10
 * @FilePath: \threeStudy\baseThree.js
 * @Description: 
 */
// 创建3D场景对象Scene
const scene = new THREE.Scene();
// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);
//相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0); //坐标原点

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();

// 创建网格
export const createMesh = (color, Geometry = THREE.SphereGeometry, ...rest) => {
  const geometry = new Geometry(...rest);
  const material = new THREE.MeshLambertMaterial({
    color: color,
  });
  const mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh); 
  return mesh;
}

// 创建网格并添加到场景中
export const createMeshAndAdd = (color, Geometry = THREE.SphereGeometry, ...rest) => {
  const mesh = createMesh(color, Geometry,...rest);
  scene.add(mesh); 
  return mesh;
}

// 渲染
export const render = () => {
  renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
  renderer.render(scene, camera); //执行渲染操作
  document.body.appendChild(renderer.domElement);
}

export { scene, camera, renderer }

