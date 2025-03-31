// @ts-nocheck
// 📌 Importation des modules nécessaires pour les tests
const test = require("node:test"); // Importation du module natif `node:test` pour écrire des tests
const assert = require("node:assert"); // Importation du module `assert` pour vérifier si les résultats sont corrects

// 📌 Importation de la fonction fizzbuzz que l'on va tester
const { fizzbuzz } = require("./fizzbuzz.js"); // On récupère la fonction fizzbuzz depuis le fichier fizzbuzz.js

// 📌 Définition d'un test qui vérifie si fizzbuzz(3) retourne bien "Fizz"
test("fizzbuzz(3)", (t) => {
  assert.strictEqual(fizzbuzz(3), "Fizz");
  // ⬆️ Vérifie que le résultat de fizzbuzz(3) est exactement "Fizz"
  // Si le test échoue, une erreur sera affichée
});
