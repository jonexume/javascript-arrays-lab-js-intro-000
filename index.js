const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {

  name.push("Ralph");
  return name;
}

function destructivelyPrependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop("Gaarfield")
  return kittens;

}

function destructivelyRemoveFirstKitten() {
var kittens = ["Milo", "Otis", "Garfield"];
kittens.shift();
return kittens;
}

function appendKitten(name) {
var kittens = ["Milo", "Otis", "Garfield"];
}

function prependKitten(name) {
var kittens = ["Milo", "Otis", "Garfield"];
}

function removeLastKitten() {
var kittens = ["Milo", "Otis", "Garfield"];
}

function removeFirstKitten() {
var kittens = ["Milo", "Otis", "Garfield"];
}
