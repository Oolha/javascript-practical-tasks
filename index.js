//!---1-----

//Write a sortPeople function that takes an array of strings names and an array of numbers heights,
//where names[i] == heights[i].It should sort the names array based on the heights array.

function sortPeople(names, heights) {
  const array = [];
  for (let [i, name] of names.entries()) {
    array.push([name, heights[i]]);
  }
  return array.sort((a, b) => b[1] - a[1]).map(([name]) => name);
}

const names = ["John", "Maria", "Alexa", "Robert"];
const heights = [180, 160, 165, 187];
console.log(sortPeople(names, heights)); // ['Robert', 'John', 'Alexa', 'Maria']

//!---2-----

//✅ Задача 1 (Базова): Поверни масив імен з об'єктів

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Ann", age: 17 },
  { name: "Jack", age: 38 },
];

function makeNamesArray(users) {
  return users.map((user) => user.name);
}

console.log(makeNamesArray(users));
// ['Alice', 'Bob']

//✅ Задача 2: Поверни масив користувачів, старших за 25

function getUsersOlderThan25(users) {
  return users.filter((user) => user.age >= 25);
}

console.log(getUsersOlderThan25(users));

//✅ Задача 3: Поверни середній вік користувачів

function getAverageAge(users) {
  const totalAge = users.reduce((total, user) => (total += user.age), 0);
  return totalAge / users.length;
}
console.log(getAverageAge(users));

//✅ Задача 4: Знайди користувача з певним ім'ям

function findUser(users) {
  return users.find((user) => user.name === "Alice");
}
console.log(findUser(users));

//✅ Задача 5: Перевір, чи всі користувачі повнолітні

function areUsersOver18(users) {
  return users.every((user) => user.age >= 18);
}
console.log(areUsersOver18(users));

//✅ Задача 6: Додай нову властивість 'isAdult: true/false' до кожного користувача

function addNewValue(users) {
  return users.map((user) => ({
    ...user,
    isAdult: user.age >= 18,
  }));
}
console.log(addNewValue(users));

//✅ Задача 7: Групування об'єктів за ключем (твоя з інтерв’ю 😎)

const data = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "vegetable", name: "carrot" },
  { id: 3, category: "fruit", name: "banana" },
  { id: 4, category: "vegetable", name: "pepper" },
  { id: 5, category: "dairy", name: "milk" },
];

function groupBy(data, category) {
  const result = {};

  data.forEach((item) => {
    const groupKey = item[category];

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  });
  return result;
}
console.log(groupBy(data, "category"));

//✅ Задача 8: Згрупуй користувачів за десятками років (10–19, 20–29, 30–39...)
// Порахуйте Math.floor(age / 10) * 10

function groupByAge(users, age) {
  const result = {};

  users.forEach((user) => {
    const ageValue = user[age];
    const groupAge = Math.floor(ageValue / 10) * 10;
    const groupKey = `${groupAge}-${groupAge + 9}`;

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(user);
  });
  return result;
}
console.log(groupByAge(users, "age"));

//✅ Задача 9: Поверни об'єкт, де ключ — ім'я, а значення — вік

//✅ Задача 10: Напиши функцію countBy, яка рахує скільки об'єктів з кожним значенням певного ключа

// Наприклад: countBy(users, 'gender') → { male: 3, female: 2 }
