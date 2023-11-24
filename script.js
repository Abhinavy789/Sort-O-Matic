function handleInput() {
  const inputField = document.getElementById('inputNumbers');
  let inputValue = inputField.value;

  // Remove non-digit characters except spaces and commas
  inputValue = inputValue.replace(/[^0-9,\s]/g, '');

  // Split the input by spaces or commas
  const numbers = inputValue.split(/[,\s]+/);

  // Iterate through each number and truncate to 3 digits
  const truncatedNumbers = numbers.map(num => num.slice(0, 3));

  // Join the truncated numbers with spaces
  inputValue = truncatedNumbers.join(' ');

  // Update the value in the input field
  inputField.value = inputValue;
}

// Event listener for input changes
document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('inputNumbers');
  inputField.addEventListener('input', handleInput);
});

function createCells() {
  // Get the input value
  const inputNumbers = document.getElementById('inputNumbers').value;
  
  // Split the input into an array of numbers
  const numbersArray = inputNumbers.split(/\s+/).map(num => parseInt(num)).filter(num => !isNaN(num));
  
  // Check if there are valid numbers
  if (numbersArray.length === 0) {
      alert('Please enter valid numbers separated by spaces.');
      return; // Exit the function if no valid numbers are found
  }
  
  // Get the cells container
  const cellsContainer = document.getElementById('cells');
  
  // Clear previous cells
  cellsContainer.innerHTML = '';
  
  // Create cells based on the numbers provided
  numbersArray.forEach((number, index) => {
      const cell = document.createElement('div');
      cell.textContent = number;
      cell.classList.add('cell');
      if (index !== numbersArray.length - 1) {
          cell.style.marginRight = '10px'; // Add right margin to create space between numbers
      }
      cellsContainer.appendChild(cell);
  });
}

// Bubble Sort with swapping animation
async function bubbleSortWithAnimation() {
  // Implementation of Bubble Sort with animation
  const cells = document.querySelectorAll('.cell');
  const len = cells.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // Visual indication of comparing elements
      cells[j].style.backgroundColor = 'red';
      cells[j + 1].style.backgroundColor = 'red';

      // Simulating delay for visualization
      await new Promise(resolve => setTimeout(resolve, 500));

      const value1 = parseInt(cells[j].textContent);
      const value2 = parseInt(cells[j + 1].textContent);

      if (value1 > value2) {
        // Swapping elements in the UI
        const temp = cells[j].textContent;
        cells[j].textContent = cells[j + 1].textContent;
        cells[j + 1].textContent = temp;

        // Visual indication of swapping
        cells[j].style.backgroundColor = 'green';
        cells[j + 1].style.backgroundColor = 'green';

        // Simulating delay for visualization
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Revert back to default color
      cells[j].style.backgroundColor = '';
      cells[j + 1].style.backgroundColor = '';
    }
  }
}

// Selection Sort with swapping animation
async function selectionSortWithAnimation() {
  // Implementation of Selection Sort with animation
  const cells = document.querySelectorAll('.cell');
    const len = cells.length;
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        // Visual indication of comparing elements
        cells[minIndex].style.backgroundColor = 'red';
        cells[j].style.backgroundColor = 'red';
  
        // Simulating delay for visualization
        await new Promise(resolve => setTimeout(resolve, 500));
  
        const value1 = parseInt(cells[minIndex].textContent);
        const value2 = parseInt(cells[j].textContent);
  
        if (value1 > value2) {
          minIndex = j;
        }
  
        // Revert back to default color
        cells[minIndex].style.backgroundColor = '';
        cells[j].style.backgroundColor = '';
      }
  
      // Swapping elements in the UI
      const temp = cells[i].textContent;
      cells[i].textContent = cells[minIndex].textContent;
      cells[minIndex].textContent = temp;
  
      // Visual indication of swapping
      cells[i].style.backgroundColor = 'green';
      cells[minIndex].style.backgroundColor = 'green';
  
      // Simulating delay for visualization
      await new Promise(resolve => setTimeout(resolve, 500));
  
      // Revert back to default color
      cells[i].style.backgroundColor = '';
      cells[minIndex].style.backgroundColor = '';
    }
}

// Insertion Sort with swapping animation
async function insertionSortWithAnimation() {
  const cells = document.querySelectorAll('.cell');
  const len = cells.length;

  for (let i = 1; i < len; i++) {
    const key = parseInt(cells[i].textContent);
    let j = i - 1;

    // Visual indication of the element being moved
    cells[i].style.backgroundColor = 'red';

    // Simulating delay for visualization
    await new Promise(resolve => setTimeout(resolve, 500));

    while (j >= 0 && parseInt(cells[j].textContent) > key) {
      // Visual indication of comparing elements
      cells[j].style.backgroundColor = 'red';

      // Moving elements to the right
      cells[j + 1].textContent = cells[j].textContent;

      // Visual indication of swapping
      cells[j + 1].style.backgroundColor = 'green';

      // Simulating delay for visualization
      await new Promise(resolve => setTimeout(resolve, 500));

      // Revert back to default color
      cells[j].style.backgroundColor = '';
      cells[j + 1].style.backgroundColor = '';

      j--;
    }

    // Placing the element in its correct position
    cells[j + 1].textContent = key.toString();

    // Visual indication of the sorted element
    cells[j + 1].style.backgroundColor = 'green';

    // Simulating delay for visualization
    await new Promise(resolve => setTimeout(resolve, 500));

    // Revert back to default color
    cells[j + 1].style.backgroundColor = '';
  }
}

// Merge Sort with swapping animation
async function mergeSortWithAnimation() {
  const merge = async (arr, l, m, r) => {
    const n1 = m - l + 1;
    const n2 = r - m;

    const leftArr = new Array(n1);
    const rightArr = new Array(n2);

    // Copy data to temporary arrays
    for (let i = 0; i < n1; i++) {
      leftArr[i] = arr[l + i].textContent;
      arr[l + i].style.backgroundColor = 'red'; // Highlight elements being compared
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    for (let j = 0; j < n2; j++) {
      rightArr[j] = arr[m + 1 + j].textContent;
      arr[m + 1 + j].style.backgroundColor = 'red'; // Highlight elements being compared
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Merge the temporary arrays back into arr[l..r]
    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (parseInt(leftArr[i]) <= parseInt(rightArr[j])) {
        arr[k].textContent = leftArr[i++];
      } else {
        arr[k].textContent = rightArr[j++];
      }
      arr[k].style.backgroundColor = 'green'; // Highlight elements being merged
      await new Promise(resolve => setTimeout(resolve, 500));
      arr[k++].style.backgroundColor = ''; // Reset color after merge
    }

    // Copy remaining elements of leftArr[], if any
    while (i < n1) {
      arr[k].textContent = leftArr[i++];
      arr[k].style.backgroundColor = 'green'; // Highlight elements being merged
      await new Promise(resolve => setTimeout(resolve, 500));
      arr[k++].style.backgroundColor = ''; // Reset color after merge
    }

    // Copy remaining elements of rightArr[], if any
    while (j < n2) {
      arr[k].textContent = rightArr[j++];
      arr[k].style.backgroundColor = 'green'; // Highlight elements being merged
      await new Promise(resolve => setTimeout(resolve, 500));
      arr[k++].style.backgroundColor = ''; // Reset color after merge
    }
  };

  const mergeSort = async (arr, l, r) => {
    if (l >= r) return;

    const m = l + Math.floor((r - l) / 2);

    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
  };

  const cells = document.querySelectorAll('.cell');
  await mergeSort(cells, 0, cells.length - 1);
}


// Quick Sort with swapping animation
async function quickSortWithAnimation() {
  const partition = async (arr, low, high) => {
    const pivot = parseInt(arr[high].textContent);
    let i = low - 1;

    for (let j = low; j < high; j++) {
      arr[j].style.backgroundColor = 'red';
      await new Promise(resolve => setTimeout(resolve, 500));

      if (parseInt(arr[j].textContent) < pivot) {
        i++;
        const temp = arr[i].textContent;
        arr[i].textContent = arr[j].textContent;
        arr[j].textContent = temp;
      }

      arr[j].style.backgroundColor = '';
    }

    const temp = arr[i + 1].textContent;
    arr[i + 1].textContent = arr[high].textContent;
    arr[high].textContent = temp;

    arr[i + 1].style.backgroundColor = 'green'; 

    return i + 1;
  };

  const quickSort = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);

      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  };

  const cells = document.querySelectorAll('.cell');
  await quickSort(cells, 0, cells.length - 1);

  // Mark the last element in green as it is also in its correct sorted position after sorting
  cells[cells.length - 1].style.backgroundColor = 'green';

  // Reset all cell colors back to their default state after sorting
  cells.forEach(cell => {
    cell.style.backgroundColor = ''; 
  });
}


// Event listeners for sorting algorithm buttons
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('bubbleSort').addEventListener('click', async function() {
    // Call Bubble Sort with swapping animation when the Bubble Sort button is clicked
    await bubbleSortWithAnimation();
  });

  document.getElementById('selectionSort').addEventListener('click', async function() {
    // Call Selection Sort with swapping animation when the Selection Sort button is clicked
    await selectionSortWithAnimation();
  });
    document.getElementById('insertionSort').addEventListener('click', async function() {
      // Call Insertion Sort with swapping animation when the Insertion Sort button is clicked
      await insertionSortWithAnimation();
    });
    document.getElementById('mergeSort').addEventListener('click', async function() {
      // Call Insertion Sort with swapping animation when the Insertion Sort button is clicked
      await mergeSortWithAnimation();
    });
    document.getElementById('quickSort').addEventListener('click', async function() {
      // Call Insertion Sort with swapping animation when the Insertion Sort button is clicked
      await quickSortWithAnimation();
    });
});

function generateRandomNumbers() {
  var numbers = [];
  for (var i = 0; i < 10; i++) { 
      numbers.push(Math.floor(Math.random() * 100) + 1); // Generate random numbers between 1 and 100
  }
  document.getElementById('inputNumbers').value = numbers.join(', '); // Display numbers with commas
}

function clearNumbers() {
  document.getElementById('inputNumbers').value = '';
}
