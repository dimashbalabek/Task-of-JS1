const names = ["Владелин", "Елена", "Игорь", "Ксения"];

//names.push("Alina");
//names.unshift("Alina");
//names.shift(); //shift удалает передний индекс  // shift не принимает себе никаких параметр по типу -> ""

//const firstName = names.shift();

//const name = names.pop(); //pop удалает последний индекс
//const list = names.toReversed();
//console.log(list); // бастан аяққа кеткен списокты наобород арттан басқа қылып жибереди

//const letters = ["b", "c", "d", "a"];
//letters.sort(); //сортирует
//const sortedLetters = letters.toSorted(); //toSorted() делает новый сортированный массив не меная оригинал

const greetWoman = "Елена";

const personIndex = names.indexOf(greetWoman); // находит индекс указанного variable в скобках
//console.log(names);
//console.log(personIndex); // greetWoman индексин шыгарып береди
//console.log(names[personIndex]);
/* personindex деген сан , значит квад.скобкага 
 personindex жазсак ол сол Елена деген текстымызды шгарып береди(биздин списокта Елена 1 боп тур) */

// дальше с помошю personIndex мы можем изменит значение(текст) этого индекса
//names[personIndex] = "Moldir"; // поменяли Елену на Moldir

// Еще один метод по типу toSorted() или toReversed()
// что бы она работало создаем новый var и она заработает

//const newList = names.with(personIndex, "Moldir");
//console.log(newList);

//       Method Map

//const capitalNames = names.map(function (name, index) {
//  if (index == 1) {
//    return (name[1] = "Elene Velikaia");
//  }
//  return name; // toUpperCase или toLowerCase
//});
//
//console.log(capitalNames);

//          Method includes() - по типу boolean (возвращает true либо false)

//console.log(names.includes("Игорь"));
//console.log(names.indexOf("Игорь") != -1);

//       Случае когда унас не простые элементы а обьекты

//const people = [
//  { name: "Владилин", budget: 4200 },
//  { name: "Елена", budget: 15100 },
//  { name: "Игорь", budget: 300 },
//  { name: "Ксения", budget: 7520 },
//];

//const finded = people.find((p) => p.budget == 7520);

//let findedPerson;
//
//for (person of people) {
//  if (person.budget == 7520) {
//    findedPerson = person;
//  }
//}
//
//console.log(findedPerson);

//const findedPerson = people.find(function (person) {
//  if (person.budget == 7520) {
//    return true;
//  }
//});

//console.log(findedPerson);

const people = [
  { name: "Владилин", budget: 4200 },
  { name: "Елена", budget: 15100 },
  { name: "Игорь", budget: 300 },
  { name: "Ксения", budget: 7520 },
];

const findedPerson = people.find(function (person) {
  return person.budget == 7520;
});

console.log(person);
