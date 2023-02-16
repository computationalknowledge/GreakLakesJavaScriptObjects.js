class Lake {
    constructor(name, area, volume, maxDepth, length, shoreline, location) {
      this.name = name;
      this.area = area;
      this.volume = volume;
      this.maxDepth = maxDepth;
      this.length = length;
      this.shoreline = shoreline;
      this.location = location;
    }
  }
  
  const lakeSuperior = new Lake(
    "Lake Superior",
    82100,
    12100,
    406.3,
    563,
    4500,
    "North America"
  );

  const lakeOntario = new Lake(
    "Lake Ontario",
    19477,
    1640,
    245,
    311,
    712,
    "North America",
  );

  const lakeHuron = new Lake(
    "Lake Huron",
    59600,
    3535,
    229,
    332,
    6155,
    "North America",
  );

  const GreatLakes = [lakeHuron, lakeOntario, lakeSuperior];

 // Use the filter method to create a new array that contains only small lakes
 // <  300,000,000 cubic meters of water
  
 // const smallLakes = numbers.filter((number) => { return number % 2 === 0; }); 
 
 // Here's an example of how you could use the filter method to create an 
 // array of small lakes:

const smallLakes = GreatLakes.filter((lake) => {
  return lake.volume < 3000;
});
console.log(smallLakes);
// we're using the filter method on the GreatLakes array and passing in a 
// callback function that takes in each Lake object in turn. 
// The callback function returns true for any lake where the volume property 
// is less than 300,000,000 cubic meters of water.
// The filter method then returns a new array of Lake objects that 
// pass the filter test, which we're storing in the smallLakes variable.
