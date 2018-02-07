const app = "I don't do much."
function destructivelyAppendKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.push("Ralph");
  console.log(kittens);
}

function destructivelyPrependKitten() {
  var kittens = ["Milo", "Otis", "Garfield"];
  kittens.unshift("Bob");
  return kittens;
}
