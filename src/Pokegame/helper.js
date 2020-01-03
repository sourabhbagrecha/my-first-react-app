const imgIdCreator = (id) => {
  if(id/10 < 1){
    return "00"+ id.toString();    
  } else {
    if(id/100 < 1){
      return "0"+ id.toString();
    } else {
      return id.toString();
    }
  }
}

export {imgIdCreator}