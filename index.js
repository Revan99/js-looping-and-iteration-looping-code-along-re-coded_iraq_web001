function countDown(num){
  num = Math.abs(num);
  while(num>=0){
    console.log(num);
    num--;
  }
}
console.log(countDown(-10));