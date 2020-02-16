module.exports = function countCats(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    for(let k = 0; k < arr[i].length; k++){
      let x = arr[i][k];
      if (x === String){
        x.trim();
      }
      if (x == '^^'){
          num++;
      }
    }
  }
  return num;
}
