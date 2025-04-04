//!---1-----

//Write a sortPeople function that takes an array of strings names and an array of numbers heights,
//where names[i] == heights[i].It should sort the names array based on the heights array.

function sortPeople(names, heights) {
  const array = [];
  for (let [i, name] of names.entries()) {
    array.push([name, heights[i]]);
  }
  return array.sort((a, b) => b[1] - a[1]).map(([name]) => name);
}

const names = ["John", "Maria", "Alexa", "Robert"];
const heights = [180, 160, 165, 187];
console.log(sortPeople(names, heights)); // ['Robert', 'John', 'Alexa', 'Maria']
