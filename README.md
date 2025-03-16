# Silhouette-Coefficient

This is a library for computing the [Silhouette Coefficient](<https://en.wikipedia.org/wiki/Silhouette_(clustering)>), a metric used to evaluate the quality of clustering.  
Given:

- an array of points (of any dimension),
- an array that corresponds to the cluster assignments for each point,
- an optional custom distance function

this module returns their silhouette score. It measures how similar a data point is to its own cluster and how dissimilar compared to other clusters, providing insights into the cohesion and separation of clusters.

## Installation

```
npm install silhouette-coefficient
```

# Usage

```javascript
const silhouette = require("silhouette-coefficient");
//or
//import silhouette from "silhouette-coefficient";

// Example 1
// 1-dimensional data points using default euclidean function
const vectors = [[-3], [3], [5]];
const labels = [0, 3, 3];
console.log(silhouette(vectors, labels));
// Expected output: 0.47222222222222215

// ----------------

// Example 2
// 4-dimensional data points using manhattanDistance to calculate distance
const vectors2 = [
  [-7.153, -7.391, 4.773, 1.982],
  [-7.391, -7.112, -1.664, 8.179],
  [-2.018, 8.284, -6.531, -6.698],
  [4.501, 2.63, -6.688, -7.322],
  [-5.644, -5.829, -2.458, 8.832],
];
const labels2 = [1, 1, 0, 2, 1];

function manhattanDistance(a, b) {
  let dist = 0;
  for (let i = 0; i < a.length; i++) {
    dist += Math.abs(a[i] - b[i]);
  }
  return dist;
}

console.log(silhouette(vectors2, labels2, manhattanDistance));
// Expected output: 0.4242836826891837
```

# Parameters

**silhouetteCoefficient(vectors, labels, [distanceFormula])**

- **vectors**: An array of data points, where each data point is represented as an array of coordinates.
- **labels**: An array indicating the cluster assignment for each data point in vectors.  
  _Example_: If labels = [0, 0, 2, 1, 1], the first two points belong to cluster 0, the third point belongs to cluster 2, and the last two points belong to cluster 1.
- **distanceFormula**: An optional custom distance formula that calculates the distance between two points. It takes two points as arguments and returns a number which represents the distance.  
  If not provided, it will use Euclidean distance.

The function returns the silhouette score which ranges from -1 to 1, where a higher value indicates better-defined clusters.
