# SORT-O-MATIC
## Introduction
Sort-O-Matic is a web-based application designed to visualize and demonstrate various sorting algorithms. It allows users to input a series of numbers, visualize the sorting process step by step, and observe how different sorting algorithms rearrange these numbers into ascending order.

## Features
1. Input and Visualization: Users can input a series of numbers separated by spaces or commas. The application visualizes these numbers as cells on the screen.
2. Sorting Algorithms: Sort-O-Matic supports the following sorting algorithms:
- Bubble Sort: Compares adjacent elements and swaps them if they are in the wrong order.
- Selection Sort: Divides the input list into a sorted and an unsorted region.
- Insertion Sort: Builds the final sorted array one element at a time.
- Merge Sort: Divides the array into smaller arrays, sorts them, and then merges them back together.
- Quick Sort: Picks an element as a pivot and partitions the array around the pivot.
3. Visualization: Each algorithm's sorting process is visually represented through color changes and animations in the UI.
4. Random Number Generation: Users can generate a set of random numbers for sorting demonstration.
5. Clear Functionality: Allows users to clear the input field.

## Usage
1. Input Numbers: Enter a series of numbers in the input field, separated by spaces or commas.
2. Visualization: Click on the "Generate Cells" button to visualize the numbers as cells on the screen.
3. Choose Sorting Algorithm: Click on one of the sorting algorithm buttons to start the sorting process.
4. Watch Sorting Animation: Observe the sorting animation as the algorithm rearranges the cells to achieve a sorted order.
5. Generate Random Numbers: Click the "Generate Random Numbers" button to populate the input field with random numbers.
6. Clear Input: Use the "Erase" button to clear the input field.

## Implementation Details
1. Technologies Used: HTML, CSS (Bootstrap for styling), JavaScript.
2. Event Handling: Input events trigger functions to handle input validation and cell generation.
3. Sorting Algorithm Animations: Each sorting algorithm has an associated function with visualizations using color changes and delays for step-by-step demonstration.

## Styling
The application utilises Bootstrap for responsive design and basic styling. Additional custom CSS rules have been implemented to adjust the layout, appearance, and animation of cells during sorting.

## Future Enhancements
1. Responsive Design: Improve the application's responsiveness for various screen sizes.
2. Additional Sorting Algorithms: Incorporate more sorting algorithms for comparative analysis.
3. User Interaction: Allow users to interactively pause, resume, or step through the sorting process.

## Conclusion
Sort-O-Matic provides an interactive and educational platform to visualize how different sorting algorithms operate. It aims to assist users in understanding the fundamental principles behind sorting algorithms through visual representation.
