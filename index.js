function countDown(num){
  num = Math.abs(num);
  while(num>=0){
    console.log(num);
    num--;
  }
}
console.log(countDown(-10));

function writeCards(name){
  for(let a = 0; a < name.lenth; a++){
    console.log('thank you ${name[a]}');
  }  
}