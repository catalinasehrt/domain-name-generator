let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "puedes"];

let domain = "";
let extenciones = ["com", "es", "net", "us"];
let tem = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let random = GenerateRandom(extenciones);
      tem = pronoun[i] + adj[j] + noun[k];
      if (random == "es") {
        domain += tem.substring(0, tem.length - 2) + ".es\n";
      } else {
        domain += tem + `.${random}\n`;
      }
    }
  }
}

function GenerateRandom(extenciones) {
  return extenciones[Math.floor(Math.random() * extenciones.length)];
}

console.log(domain);
