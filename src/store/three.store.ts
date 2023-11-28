import { defineStore } from 'pinia';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
// import * as THREE from 'three'
export const useThreeStore = defineStore({
  id: 'threeStore',
  state: () => ({
    scene: null as any,
    camera: null as any,
    renderer: null as any,
  }),
  actions: {
    createScene(){
      this.scene = new Scene();
    },

    createCamera(){
      this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    },
    setCameraPosition(x: number, y: number, z: number){
      this.camera.position.set(x, y, z);
    },

    createRenderer(){
      this.renderer = new WebGLRenderer();
    },
    setRendererSize(){
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    renderSceneAndCamera(){
      this.renderer.render(this.scene, this.camera)
    },
    addRendererToDOM(el: any){
      el.appendChild(this.renderer.domElement)
    }
  },
});