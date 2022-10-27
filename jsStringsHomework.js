// 1. Se da urmatorul string:
let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu.";
// 1.1 Verifica daca numele "Daniel" se afla pe lista.
// 1.2 Daca numele "Daniel" se afla pe lista, modifica lista, astfel incat in locul lui "Daniel" sa contina "Cornel".
console.log("Exercitiul 1.");
console.log(badKids.includes("Daniel"));
if(badKids.includes("Daniel")) {
    badKids = badKids.replace("Daniel", 'Cornel');
}
console.log(badKids);

console.log("");

// 2. Se da urmatorul string:
const testGrades = "9.80/6.85/9.10/7.80/8.20";
// Sa se calculeze media aritmetica a notelor.
// HINT: Transforma string-ul intr-un array si apoi itereaza prin array.
console.log("Exercitiul 2.");
const testGrades2= testGrades.split('/');
console.log(testGrades2);
let testGradesSum = 0;

testGrades2.forEach((element) => {
    element = Number(element);
    testGradesSum = testGradesSum + element;
});
const testGradesAverage = testGradesSum/testGrades2.length; 
console.log('Media aritmetica a numerelor din array este: ', testGradesAverage,'.');
console.log("");

// 3. Se da urmatorul obiect:
const props = {
  name: 'Minge fotbal Nike T90',
  price: 220,
  currency: "RON",
  brand: "Nike"
}
// 3.1. Extrage din obiect valorile urmatoarelor proprietati: name, price, currency.
// 3.2. Folosind proprietatile extrase anterior, afiseaza un mesaj de forma: "Produsul TODO are pretul TODO".
console.log("Exercitiul 3.");
const { name, price, currency } = props;
const message = `Produsul ${name} are pretul ${price}.`;
console.log(message);
console.log("");

// 4. Se da inca un obiect:
const additionalProps = {
  isAvailable: true
}
// Creeaza un obiect nou, care sa contina proprietatile obiectelor props si additionalProps.
const newObject ={...props, ... additionalProps};
console.log(newObject);
