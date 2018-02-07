const app = "I don't do much."
function destructivelyAppendKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("Bob");
  return kittens;
}
