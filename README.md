# Silhouette-Coefficient

Given an array of points (regardless of their dimensions), an array of labels that corresponds to these points, and an optional distance function, this module calculates their silhouette coefficient, a metric used to evaluate the quality of clustering algorithms. It measures how similar an object is to its own cluster and how dissimilar compared to other clusters, providing insights into the cohesion and separation of clusters.

# Usage

```javascript
const silhouette = require("silhouette-coefficient");
//or
//import silhouette from "silhouette-coefficient";

// for 1-D datapoints
const vectors = [[-3], [3], [5]];
const labels = [0, 3, 3];
console.log(silhouette(vectors, labels));
// Expected output: 0.47222222222222215

// for 4-D datapoints
const vectors2 = [
  [-7.15524373, -7.39001621, 4.77433433, 1.98072512],
  [-7.39587521, -7.11084292, -1.66752104, 8.17317549],
  [-2.01567068, 8.28177994, -6.53369301, -6.6933595],
  [4.50927011, 2.6324358, -6.68023878, -7.32920152],
  [-5.64317844, -5.82690509, -2.45696938, 8.83488172],
];
const labels2 = [1, 1, 0, 2, 1];
console.log(silhouette(vectors2, labels2));
// Expected output: 0.4004001770560879
```
