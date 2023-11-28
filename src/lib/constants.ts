import { getRandomNumberBetween } from "./helpers";

export const testData = [
  // Crab
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Crab.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Crab.mp3",
    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: true,
    amt: 2,
  },
  // Dolphin
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Dolphin.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Dolphin.mp3",
    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 8),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Eel
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Eel.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Eel.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(1, 30),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Fish
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Fish.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Fish.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(1, 4),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Hammerhead
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Hammerhead.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Hammerhead.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(2, 5),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Lobster
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Lobster.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Lobster.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: true,
    amt: 2,
  },
  // Octopus
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Octopus.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Octopus.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(1, 4),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Penguin
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Penguin.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Penguin.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 7),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Seal
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Seal.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Seal.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 7),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Shark
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Shark.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Shark.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(1, 7),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Squid
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Squid.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Squid.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 8),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },
    scale: 0.5,
    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Starfish
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/StarFish.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/StarFish.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: true,
    amt: 2,
  },
  // Stingray
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/StingRay.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/StingRay.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 6),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Turtle
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Turtle.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Turtle.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(2, 5),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: true,
    amt: 2,
  },
  // Whale
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Whale.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Whale.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: getRandomNumberBetween(3, 7),
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },
    scale: 1.5,
    moveY: false,
    canMove: true,
    amt: 1,
  },
  // ENVIRONMENT
  // Coral
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Coral.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Coral.mp3",
    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: false,
    amt: 5,
  },
  // Rocks
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Rocks.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Rocks.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: false,
    amt: 2,
  },
  // SeaWeed
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/SeaWeed.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/SeaWeed.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: false,
    amt: 20,
  },
];

export const environmentModels = [
  // ENVIRONMENT
  // Coral
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Coral.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Coral.mp3",
    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: false,
    amt: 10,
  },
  // Rocks
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/Rocks.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/Rocks.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: true,
    canMove: false,
    amt: 5,
  },
  // SeaWeed
  {
    modelURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-models/main/SeaWeed.glb",
    audioURL:
      "https://raw.githubusercontent.com/JasonWandrag/low-poly-aquatic-life-audio/main/SeaWeed.mp3",

    position: {
      x: getRandomNumberBetween(-30, 30),
      y: 0,
      z: getRandomNumberBetween(-30, 30),
    },
    rotation: {
      x: 0,
      y: Math.random() * 360,
      z: 0,
    },

    moveY: false,
    canMove: false,
    amt: 50,
  },
];

export const PARAMS = {
  physics: {
    gravity: -9.81,
  },
  camera: {
    position: {
      x: 15,
      y: 15,
      z: 55,
    },
    fov: 75,
    aspectRatio: window.innerWidth / window.innerHeight,
    closeView: 0.1,
    farView: 1000,
  },
  floor: {
    size: {
      width: 1000,
      height: 1000,
    },
    color: 0x76c893,
  },
  lighting: {
    ambient: {
      color: 0x333333,
    },
    directional: {
      color: 0xffffff,
      intensity: 10,
      position: {
        x: -10,
        y: 200,
        z: 10,
      },
      shadow: {
        top: 20,
        bottom: -20,
        left: 20,
        right: -20,
      },
    },
  },
};
