<template>
  <div ref="canvas"></div>
</template>

<script setup lang="ts">
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  MeshStandardMaterial,
  Mesh,
  AmbientLight,
  PlaneGeometry,
  DirectionalLight,
  AnimationMixer,
  Clock,
  Box3,
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as CANNON from "cannon-es";
import * as YUKA from "yuka";
import * as dat from "dat.gui";
import { onMounted, ref } from "vue";
import { testData } from "../lib/constants";
import { getRandomNumberBetween } from "../lib/helpers";

const sync = (entity: any, renderComponent: any) =>
  renderComponent.matrix.copy(entity.worldMatrix);

const canvas = ref(null);

const gui = new dat.GUI();
const guiOptions = {
  floorColor: 0x76c893,
};

// Create a renderer
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
// Physics Engine
const world = new CANNON.World({
  gravity: new CANNON.Vec3(0, -9.81, 0),
});
// AI Manager
const entityManager = new YUKA.EntityManager();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
const scene = new Scene();

const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 15);

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

const assetLoader = new GLTFLoader();
let loadedObjects = [] as any[];

testData.forEach((item) => {
  console.log(item);
  for (let j = 0; j < item.amt; j++) {
    assetLoader.load(
      item.modelURL,
      (obj) => {
        const model = obj.scene;
        const randomScale = Math.random() * 2 + 1;
        model.scale.set(randomScale, randomScale, randomScale);
        model.traverse((node: any) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });
        const mixer = new AnimationMixer(model);
        const clips = obj.animations;
        clips.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.play();
        });
        // Add collision phyics to model
        const boundingBox = new Box3().setFromObject(obj.scene);

        // Get the dimensions of the bounding box
        const dimensions = new Vector3();
        boundingBox.getSize(dimensions);

        const physicsBody = new CANNON.Body({
          mass: item.canMove ? 1 : 0,
          shape: new CANNON.Box(
            new CANNON.Vec3(dimensions.x, dimensions.y, dimensions.z)
            //    new CANNON.Vec3(0.1, 0.1, 0.1)
          ),
          position: new CANNON.Vec3(
            getRandomNumberBetween(-30, 30),
            item.position.y + 0.2,
            getRandomNumberBetween(-30, 30)
          ),
        });
        world.addBody(physicsBody);
        model.position.set(
          getRandomNumberBetween(-30, 30),
          item.position.y,
          getRandomNumberBetween(-30, 30)
        );
        model.rotation.set(
          item.rotation.x,
          Math.random() * 360,
          item.rotation.z
        );
        model.rotateX(Math.PI * 0.5);

        // Add AI
        const vehicle = new YUKA.Vehicle();
        vehicle.setRenderComponent(model, sync);

        const path = new YUKA.Path();
        if (item.canMove) {
          model.matrixAutoUpdate = false;
          for (let i = 0; i < getRandomNumberBetween(4, 15); i++) {
            path.add(
              new YUKA.Vector3(
                getRandomNumberBetween(-30, 30),
                item.moveY ? getRandomNumberBetween(0, 30) : 0,
                getRandomNumberBetween(-30, 30)
              )
            );
          }
          path.loop = true;
        } else {
          path.add(
            new YUKA.Vector3(
              getRandomNumberBetween(-30, 30),
              item.position.y,
              getRandomNumberBetween(-30, 30)
            )
          );
        }

        vehicle.position.copy(path.current());
        const followPathBehaviour = new YUKA.FollowPathBehavior(path, 10);
        vehicle.steering.add(followPathBehaviour);
        entityManager.add(vehicle);
        const time = new YUKA.Time();
        loadedObjects.push({
          model,
          mixer,
          clock: new Clock(),
          physicsBody,
          vehicle,
          path,
          time,
        });
        scene.add(model);
      },
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
      (err) => console.log("Error Loading", err)
    );
  }
});

// Setup Ground
const floorGeo = new PlaneGeometry(1000, 1000);
const floorMat = new MeshStandardMaterial({ color: guiOptions.floorColor });
const floor = new Mesh(floorGeo, floorMat);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
scene.add(floor);
const physicsFloor = new CANNON.Body({
  shape: new CANNON.Plane(),
  type: CANNON.Body.STATIC,
});
world.addBody(physicsFloor);
physicsFloor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

// Setup Lighting
const ambientLight = new AmbientLight(0x333333);
scene.add(ambientLight);
const directionalLight = new DirectionalLight(0xffffff, 10);
directionalLight.position.set(-10, 200, 10);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -20;
directionalLight.shadow.camera.top = 20;
directionalLight.shadow.camera.left = 20;
directionalLight.shadow.camera.right = -20;
scene.add(directionalLight);

gui
  .addColor(guiOptions, "floorColor")
  .onChange((e) => floor.material.color.set(e));

const timestep = 1 / 60;

// Animation loop function
const time = new YUKA.Time();
function animate() {
  world.step(timestep);
  floor.position.copy(physicsFloor.position);
  floor.quaternion.copy(physicsFloor.quaternion);
  if (!loadedObjects.length) return;
  loadedObjects.forEach((obj) => {
    obj.mixer.update(obj.clock.getDelta());
    obj.model.position.copy(obj.physicsBody.position);
    obj.model.quaternion.copy(obj.physicsBody.quaternion);
  });
  const delta = time.update().getDelta();
  entityManager.update(delta);
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

onMounted(() => {
  canvas.value.appendChild(renderer.domElement);
});
</script>

<style></style>
