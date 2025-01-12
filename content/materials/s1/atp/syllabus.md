---
title: "Algorithmic Thinking with Python"
description: "2024 Scheme Syllabus for Algorithmic Thinking with Python"
summary: ""
date: 2025-01-09T21:34:19+05:30
lastmod: 2025-01-09T21:34:19+05:30
draft: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## Module 1
##### PROBLEM-SOLVING STRATEGIES
- **Problem-solving strategies defined**
- **Importance of understanding multiple problem-solving strategies:**
  - Trial and Error
  - Heuristics
  - Means-Ends Analysis
  - Backtracking (Working backward)

##### THE PROBLEM-SOLVING PROCESS
- Computer as a model of computation
- Understanding the problem
- Formulating a model
- Developing an algorithm
- Writing the program
- Testing the program
- Evaluating the solution

##### ESSENTIALS OF PYTHON PROGRAMMING
- Creating and using variables in Python
- Numeric and String data types in Python
- Using the `math` module
- Using the Python Standard Library for handling basic I/O: `print`, `input`, Python operators, and their precedence

---

## Module 2

##### ALGORITHM AND PSEUDOCODE REPRESENTATION
- **Meaning and definition of Pseudocode**
- **Reasons for using pseudocode**
- **The main constructs of pseudocode:**
  - Sequencing
  - Selection (if-else structure, case structure)
  - Repetition (for, while, repeat-until loops)

###### Sample Problems
- Evaluate an expression: `d = a + b * c`
- Find simple interest
- Determine the larger of two numbers
- Determine the smallest of three numbers
- Determine the grade earned by a student based on KTU grade scale (using if-else and case structures)
- Print the numbers from 1 to 50 in descending order
- Find the sum of `n` numbers input by the user (using all three loop variants)
- Factorial of a number
- Largest of `n` numbers

(*Not to be limited to these exercises. More can be worked out if time permits*)

##### FLOWCHARTS
- **Symbols used in creating a flowchart:**
  - Start and end
  - Arithmetic calculations
  - Input/output operation
  - Decision (selection)
  - Module name (call)
  - For loop (Hexagon)
  - Flow-lines
  - On-page connector
  - Off-page connector

---

## Module 3

##### SELECTION AND ITERATION USING PYTHON
- `if-else`, `elif`, `for` loop, `range`, `while` loop
- **Sequence data types in Python:**
  - List
  - Tuple
  - Set
  - Strings
  - Dictionary
- **Creating and using arrays in Python** (using `numpy` library)

##### DECOMPOSITION AND MODULARIZATION
- Problem decomposition as a strategy for solving complex problems
- Modularization
- Motivation for modularization
- Defining and using functions in Python
- Functions with multiple return values

##### RECURSION
- Recursion defined
- Reasons for using recursion
- The call stack
- Recursion and the stack
- Avoiding circularity in recursion
- **Sample problems:**
  - Finding the nth Fibonacci number
  - Greatest common divisor of two positive integers
  - Factorial of a positive integer
  - Adding two positive integers
  - Sum of digits of a positive number

(*Not to be limited to these exercises. More can be worked out if time permits*)

*The idea should be introduced and demonstrated using Merge Sort and the problem of returning the top three integers from a list of `n >= 3` integers as examples. (*Not to be limited to these two exercises. More can be worked out if time permits*)*

---

## Module 4

##### COMPUTATIONAL APPROACHES TO PROBLEM-SOLVING
*(Introductory diagrammatic/algorithmic explanations only. Analysis not required)*

###### Brute-force Approach
- **Example:**
  - Padlock
  - Password guessing

###### Divide-and-conquer Approach
- **Example:**
  - The Merge Sort Algorithm
- Advantages of Divide-and-Conquer Approach
- Disadvantages of Divide-and-Conquer Approach

###### Dynamic Programming Approach
- **Example:**
  - Fibonacci series
- Recursion vs Dynamic Programming

###### Greedy Algorithm Approach
- **Example:**
  - Given an array of positive integers, each indicating the completion time for a task, find the maximum number of tasks that can be completed in the limited amount of time available.
- Motivations for the Greedy Approach
- Characteristics of the Greedy Algorithm
- Greedy Algorithms vs Dynamic Programming

###### Randomized Approach
- **Examples:**
  1. A company selling jeans gives a coupon for each pair of jeans. There are `n` different coupons. Collecting `n` different coupons would give you free jeans. How many jeans do you expect to buy before getting a free one?
  2. `n` people go to a party and drop off their hats to a hat-check person. When the party is over, a different hat-check person is on duty and returns the `n` hats randomly back to each person. What is the expected number of people who get back their hats?
- Motivations for the Randomized Approach
