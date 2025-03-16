# Silhouette-Coefficient

This is a library for computing the [Silhouette Coefficient](<https://en.wikipedia.org/wiki/Silhouette_(clustering)>), a metric used to evaluate the quality of clustering.  
Given:

- an array of points (of any dimension),
- an array that corresponds to the cluster assignments for each point,
- an optional custom distance function

this module returns their silhouette score. It measures how similar a data point is to its own cluster and how dissimilar compared to other clusters, providing insights into the cohesion and separation of clusters.

# Usage

```javascript
const silhouette = require("silhouette-coefficient");
//or
//import silhouette from "silhouette-coefficient";

// for 1-dimension data points
const vectors = [[-3], [3], [5]];
const labels = [0, 3, 3];
console.log(silhouette(vectors, labels));
// Expected output: 0.47222222222222215

// for 4-dimension data points
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

# Parameters

**silhouetteCoefficient(vectors, labels, distanceFormula)**

- **vectors**: An array of data points, where each data point is represented as an array of coordinates.
- **labels**: An array indicating the cluster assignment for each data point in vectors.  
  _Example_: If labels = [0, 0, 2, 1, 1], the first two points belong to cluster 0, the third point belongs to cluster 2, and the last two points belong to cluster 1.
- **distanceFormula**: An optional custom distance formula that calculates the distance between two points. It takes two points as arguments and returns a number which represents the distance.  
  If not provided, it will use Euclidean distance.

The function returns the silhouette score which ranges from -1 to 1, where a higher value indicates better-defined clusters.
