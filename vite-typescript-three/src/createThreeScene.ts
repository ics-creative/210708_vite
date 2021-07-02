import * as THREE from 'three'

export const createThreeScene = (width = 800, height = 600) => {
  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer()
  // レンダラーのサイズを設定
  renderer.setSize(width, height)
  // シーンを作成
  const scene = new THREE.Scene()

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000)
  camera.position.set(0, 0, 1000)

  // 箱を作成
  const geometry = new THREE.BoxGeometry(250, 250, 250)
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 })
  const box = new THREE.Mesh(geometry, material)
  box.position.z = -5
  scene.add(box)

  // 平行光源を生成
  const light = new THREE.DirectionalLight(0xffffff)
  light.position.set(1, 1, 1)
  scene.add(light)

  const tick = (): void => {
    requestAnimationFrame(tick)

    box.rotation.x += 0.05
    box.rotation.y += 0.05

    // 描画
    renderer.render(scene, camera)
  }
  tick()

  return renderer.domElement
}
