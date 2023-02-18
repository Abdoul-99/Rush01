function checkNumber(z) {
  if (z<5) {
    console.log("Faible");
  }else if (z==5 || z==6) {
    console.log("Moyen");
  }
}
checkNumber(3);
checkNumber(5);
checkNumber(6);

module.exports = checkNumber;