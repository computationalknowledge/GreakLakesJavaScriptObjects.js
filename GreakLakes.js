const greatLakes = [
  {
    name: "Lake Superior",
    area: 82100,
    volume: 12100,
    maxDepth: 406.3,
    length: 563,
    shoreline: 4500,
    location: "North America",
  },
  {
    name: "Lake Michigan",
    area: 57800,
    volume: 4918,
    maxDepth: 281.3,
    length: 494,
    shoreline: 2626,
    location: "North America",
  },
  {
    name: "Lake Huron",
    area: 59600,
    volume: 3535,
    maxDepth: 229,
    length: 332,
    shoreline: 6155,
    location: "North America",
  },
  {
    name: "Lake Erie",
    area: 25700,
    volume: 1160,
    maxDepth: 64,
    length: 241,
    shoreline: 1143,
    location: "North America",
  },
  {
    name: "Lake Ontario",
    area: 19477,
    volume: 1640,
    maxDepth: 245,
    length: 311,
    shoreline: 712,
    location: "North America",
  },
];


Here's an example of instantiating the Lake class to create an object for Lake Superior:


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

console.log(lakeSuperior);


In this example, we've defined a Lake class with a constructor method that takes in seven arguments: name, area, volume, maxDepth, length, shoreline, and location. The constructor sets these values as properties of the new Lake object that is being created.

We then create a new Lake object called lakeSuperior using the new keyword and passing in the values for each of the constructor arguments. Finally, we log the lakeSuperior object to the console to confirm that it was instantiated correctly.

This approach allows for even more flexibility and customization than the previous examples, as you can easily create new Lake objects with different attribute values as needed.
