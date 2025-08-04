import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "POGRxRazerUseCase";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // Required for GitHub Pages
});
