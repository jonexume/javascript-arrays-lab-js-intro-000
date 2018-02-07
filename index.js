const app = "I don't do much."
function destructivelyAppendKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.pop("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("Ralph");
  return kittens;
}
