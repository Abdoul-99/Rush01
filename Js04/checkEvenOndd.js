function checkEvenOndd(z){
  if (z%2==0){
    console.log("Pair");
  }else {
    console.log("Impair");
  }
}
checkEvenOndd(22);
checkEvenOndd(19);

module.exports = checkEvenOndd;