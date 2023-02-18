function checkSign(z){
  if (Math.sign(z)==-1) {
    console.log("Négatif");
  }else{
    console.log("Positif ");
  }
} 
checkSign(-2);
checkSign(3);
checkSign(5);

module.exports = checkSign;