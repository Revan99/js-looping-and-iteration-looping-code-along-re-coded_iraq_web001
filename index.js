function countDown(num){
  num = Math.abs(num);
  while(num>=0){
    console.log(num);
    num--;
  }
}
console.log(countDown(-10));

function writeCards(name){
  let names
  for(let a = 0; a < name.lenth; a++){
    names[a] = ('thank you'+ name[a]);
  }  
  return names;
}