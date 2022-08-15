function frequencySort(arr)
{
    //write your logic here, return the output. Do not print anything
	let obj = {};
    for (const num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  return arr.sort((a, b) => obj[a] === obj[b] ? b - a : obj[a] - obj[b]);
}
let arr = [1,1,2,2,2,3];
console.log(frequencySort(arr).join(" "));