declare const __APP_API_URL__: string;

export const url: {
  api: string;
} = {
  api: __APP_API_URL__ || 'http://localhost:3000',
};
