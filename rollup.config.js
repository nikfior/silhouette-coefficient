export default {
  input: "./src/silhouette.js",
  output: [
    {
      file: "dist/silhouette.cjs",
      format: "cjs",
    },
    {
      file: "dist/silhouette.esm.js",
      format: "esm",
    },
  ],
};
