

export const shuffle = (array)=> {
  
  let arrayToShuffel = new Array(...array)
  

  let currentIndex = arrayToShuffel.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arrayToShuffel[currentIndex], arrayToShuffel[randomIndex]] = [
      arrayToShuffel[randomIndex], arrayToShuffel[currentIndex]];
  }

  return arrayToShuffel;

}