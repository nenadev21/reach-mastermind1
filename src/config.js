//Variables to be used throughout the app

export const num = 4;
export const min = 0;
export const max = 7;
export const api_ENDPOINT = 'https://www.random.org/integers/';
export const api_URL = `${api_ENDPOINT}?num=${num}&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=rnd`;

export const MAX_ATTEMPTS = 10;

export const difficulties = [
  { name: 'Easy', value: 3 },
  { name: 'Medium', value: 4 },
  { name: 'Hard', value: 5 },
];
