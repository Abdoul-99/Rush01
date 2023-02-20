let strArr = ["(1,2)", "(2,4)", "(7,2)"];

function treeConstructor(strArr) {

  let parents = {};

 
  for (let i = 0; i < strArr.length; i++) {

    let pair = strArr[i].slice(1, -1).split(",");
    let child = pair[0];
    let parent = pair[1];
    
    if (child in parents) {
      return false;
    }

    parents[child] = parent;
  }

  for (let child in parents) {
    let parent = parents[child];
    let count = 0;

    for (let otherChild in parents) {
      if (parents[otherChild] === parent) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }

  return true;
}

console.log(TreeConstructor(strArr));

module.exports = treeConstructor;
