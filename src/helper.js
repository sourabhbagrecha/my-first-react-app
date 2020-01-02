const numberConverter = (num) => {
  let word;
  switch(num){
    case 1: 
      word = 'one';
      break;
    case 2: 
      word = 'two';
      break;
    case 3: 
      word = 'three';
      break;
    case 4: 
      word = 'four';
      break;
    case 5: 
      word = 'five';
      break;
    case 6: 
      word = 'six';
      break;
      default: 
      word = 'none';
      break;
  }
  return word;
}

export {numberConverter};