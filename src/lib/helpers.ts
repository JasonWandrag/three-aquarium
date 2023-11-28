export const getRandomNumberBetween = (min: number, max: number) => Math.random() * (max - min + 1) + min;
export const waitForMs = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
