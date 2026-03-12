# Water Tank Problem – Trapping Rain Water Visualization

## Overview

This project is a **Vanilla JavaScript web application** that visualizes the classic **Trapping Rain Water problem**.
Given an array representing block heights, the application calculates the **units of water trapped between the blocks** and renders a **grid visualization** of blocks and stored water.

The UI is implemented using **HTML, CSS, and Vanilla JavaScript**, without any frameworks.

---

## Problem Statement

Given an array of non-negative integers representing block heights, compute how much **water can be trapped between the blocks after rainfall**.

Example:

Input

```
[0,4,0,0,0,6,0,6,4,0]
```

Output

```
18 Units
```

---

## Visualization

The application visually represents:

* **Yellow cells → Blocks**
* **Blue cells → Trapped water**
* **Empty cells → Air space**

The grid height dynamically adjusts based on the **maximum column height (block height + water)**.

---

## Features

* Vanilla JavaScript implementation
* Dynamic grid visualization
* Input validation
* Clear button to reset UI
* Computes trapped water using an optimized approach
* Interactive UI

---

## Input Validation

The input must follow these rules:

* Numbers only
* Comma-separated values
* Each value must be **greater than or equal to 0**

Valid Input:

```
0,4,0,0,0,6,0,6,4,0
```

Invalid Input:

```
0,4,-2,5
0,4,a,5
0,,4,5
```

---

## Algorithm

The solution uses the **prefix maximum and suffix maximum approach**.

Steps:

1. Compute the maximum height to the **left of each block**
2. Compute the maximum height to the **right of each block**
3. The water stored at index `i` is:

```
water[i] = min(leftMax[i], rightMax[i]) - height[i]
```

4. Sum all water values to get the **total trapped water**.

Time Complexity

```
O(n)
```

Space Complexity

```
O(n)
```

---

## Project Structure

```
water-tank-visualization
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Clone the repository

```
git clone https://github.com/your-username/water-tank-problem.git
```

2. Open the project folder

3. Run the application by opening:

```
index.html
```

in your browser.

---

## Technologies Used

* HTML5
* CSS3
* Vanilla JavaScript

---

## License

ISC

## Author

Hemamalini

---
