function chunkArrayInGroups(arr, size) {
  // figure out how big each group is 
  var arrayLength = arr.length; 
  var groupSize = arrayLength / size;


  
  return groupSize;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
