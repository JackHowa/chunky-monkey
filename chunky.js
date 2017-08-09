function chunkArrayInGroups(arr, size) {
  // figure out how big each group is 
  var arrayLength = arr.length; 
//   var groupSize = arrayLength / size;

  // setup target arrays 
  var bigArray = [];
  var arrayGroup = [];

  // feel like modulo would be helpful here 
  // start at 1 so that math of modulo works divisible by group size
  for (i = 0; i < arr.length; i++) {
   arrayGroup.push(arr[i]);

    // check if group size has no remainder aka multiple 
    if ((i + 1) % size == 0) {

      // need to push array into index of that multi-d array
      var bigArrayIndex = i / size;

      bigArray.push(arrayGroup);

      // reset group 
      arrayGroup = [];
    }
  }
  return bigArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)