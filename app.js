function bouncer(arr) {
    var truthy = [];
    for(var elem of arr){
      if(elem) truthy.push(elem);
      console.log (truthy) 
    }
  return truthy;
  }
  
  bouncer([7, "ate", "", false, 9]);

  function chunkArrayInGroups(arr, size) {
    var groups = [];
    while ( arr.length >0){
      groups.push(arr.slice(0,size));
      arr = arr.slice(size);
      console.log(groups)
    }
    return groups
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2)


