# Recursion

Recursive algorithms project developed as part of the JavaScript path of [The Odin Project](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript), with a focus on **recursion**, **divide and conquer**, and comparing iterative approaches.

## Project Objective

The main objective was to practice:
- Implementing the Fibonacci sequence iteratively and recursively
- Understanding base cases and recursive calls
- Implementing Merge Sort with a divide-and-conquer strategy
- Validating solutions with automated tests

## What is it?

An assortment of functions and tests to solve the challenges from the Recursion lesson:
- **Fibonacci**: `fibs` (iterativo) e `fibsRec` (recursivo)
- **Merge Sort**: `merge`, `merge2` e `mergeSort`

As proposed by the lesson, the project runs from the command line (Node.js), without a graphical interface.

## How to use

1. Enter the project folder: `Javascript/top-restaurant-page`
2. Install the dependencies:
`npm install`

3. Run the tests:
`npm test`

## Features

- **`fibs(num)`**: returns the first `num` numbers in the Fibonacci sequence (iterative)
- **`fibsRec(num, arr)`**: returns the first `num` Fibonacci numbers using recursion
- **`merge(arr1, arr2)`**: merges two sorted lists into a new sorted list
- **`merge2(arr, start, middle, end)`**: merges two sorted partitions within the same list
- **`mergeSort(arr, start, end)`**: sorts a list with recursive Merge Sort
- **Test coverage**: scenarios with sorted, reversed, repeated, empty, and negative-number arrays

## File Structure

- `fibonacci.js`: Fibonacci implementations
- `fibonacci.spec.js`: Fibonacci function tests
- `merge-sort.js`: helper implementations and Merge Sort
- `mergeSort.spec.js`: merge and sorting function tests

## Technologies Used

- JavaScript (Node.js / CommonJS)
- Jest

---

Project developed following: [The Odin Project - Recursion](https://www.theodinproject.com/lessons/javascript-recursion)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
