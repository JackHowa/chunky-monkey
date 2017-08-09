function chunkArrayInGroups(arr, size) {
  // figure out how big each group is 
  var arrayLength = arr.length; 
  var groupSize = arrayLength / size;

  // setup target arrays 
  var bigArray = [];
  var arrayGroup = [];

  // feel like modulo would be helpful here 
  // start at 1 so that math of modulo works divisible by group size
  for (i = 1; i < arr.length; i++) {
   // arrayGroup << arr[i];

    // check if group size has no remainder aka multiple 
    if (i % groupSize == 0) {
      // bigArray << arrayGroup;

      // reset group 
      // arrayGroup = [];
    }
  }
  return bigArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
