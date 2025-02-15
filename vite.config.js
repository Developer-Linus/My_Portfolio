import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true,
    host: "0.0.0.0",
    port: 5173,
  },
  preview: {
    open: true,
    host: "0.0.0.0",
    port: 5173,
  },
});
