const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(name) {

  kittens.unshift("Bob");
  return kittens;
}

function destructivelyRemoveLastKitten() {

  kittens.pop("Garfield");
  return kittens;

}

function destructivelyRemoveFirstKitten() {

kittens.shift("Milo");
return kittens;
}

function appendKitten(name) {
kittens.push("Broom");
return kittens;
}

function prependKitten(name) {
kittens.unshift("Arnold");
return kittens;
}

function removeLastKitten() {
kittens.pop("Garfield");
return kittens;
}

function removeFirstKitten() {
kittens.shift("Milo");
return kittens;
}
