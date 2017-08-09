function chunkArrayInGroups(arr, size) {
  // setup target arrays 
  var bigArray = [];
  var arrayGroup = [];

  // feel like modulo would be helpful here 
  for (i = 0; i < arr.length; i++) {
   arrayGroup.push(arr[i]);

    // check if group size has no remainder aka multiple 
    // start at 1 so that math of modulo works divisible by group size
    if ((i + 1) % size == 0) {
      bigArray.push(arrayGroup);

      // reset group 
      arrayGroup = [];
    }
  }

  // check if array group hasn't been cleared 
  // when perfect divisibility doesn't happen
  // find the remaining bits 
  // greater than zero to include one 
  if (arrayGroup.length > 0) {
    bigArray.push(arrayGroup);
  }

  return bigArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)