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

function getUserInfo(users) {
  const result = {};
  users.forEach((user) => {
    result[user.name] = user.age;
  });
  return result;
}
console.log(getUserInfo(users));

//✅ Задача 10: Напиши функцію countBy, яка рахує скільки об'єктів з кожним значенням певного ключа

const users1 = [
  { name: "Alice", gender: "female" },
  { name: "Bob", gender: "male" },
  { name: "Carol", gender: "female" },
  { name: "David", gender: "male" },
  { name: "Ethan", gender: "male" },
];

function countByGenders(array, key) {
  const result = {};
  array.forEach((item) => {
    const value = item[key];
    if (result[value]) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }
  });
  return result;
}

console.log(countByGenders(users1, "gender"));
// Наприклад: countBy(users, 'gender') → { male: 3, female: 2 }

//!---3------

//🔹 Задача 11: Унікальні значення
//Поверни масив унікальних імен з масиву користувачів

const users2 = [
  { name: "Alice", age: 30 },
  { name: "boB", age: 25 },
  { name: "Alice", age: 17 },
  { name: "daVid", age: 45 },
];

function getUniqueNames(array) {
  const names = array.map((user) => user.name);

  const uniqueNames = new Set(names);
  return Array.from(uniqueNames);
}
console.log(getUniqueNames(users2));
// ['Alice', 'Bob', 'David']

//🔹 Задача 12: Пошук з частковим збігом
//Поверни всіх користувачів, чиє імя включає певний рядок (без урахування регістру)

function searchUsers(array, searchString) {
  return array.filter((user) =>
    user.name.toLowerCase().includes(searchString.toLowerCase())
  );
}

console.log(searchUsers(users2, "al"));

//🔹 Задача 13: Відсортуй користувачів за віком за зростанням
function sortUsersByAge(array) {
  return array.sort((a, b) => a.age - b.age);
}
console.log(sortUsersByAge(users2));
// [ {age: 20}, {age: 25}, {age: 30} ]

//🔹 Задача 14: Зроби capitalize для імен
//Поверни масив, де перша літера імені — велика, інші — малі.

function capitalizeNames(array) {
  return array.map(
    (user) =>
      user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()
  );
}
console.log(capitalizeNames(users2));

// ['Alice', 'Bob', 'David']

//🔹 Задача 15: Перевір, чи є хоча б один користувач старший за 50

function hasSenior(array) {
  return array.some((user) => user.age >= 50);
}
console.log(hasSenior(users2));

// true або false

//🔹 Задача 16: Створи об'єкт id -> name

const mapIdsToNames = (data) => {
  return data.reduce((acc, { id, name }) => {
    acc[id] = name;
    return acc;
  }, {});
};

// [{id: 1, name: 'Bob'}] → {1: 'Bob'}
console.log(mapIdsToNames(data));

//🔹 Задача 17: Знайди найстаршого користувача

const getOldestUser = (users2) => {
  return users2.reduce((oldest, currentUser) => {
    return currentUser.age > oldest.age ? currentUser : oldest;
  }, users2[0]);
};
console.log(getOldestUser(users2));

// { name: 'Alice', age: 65 }

//🔹 Задача 18: Об'єднай два масиви користувачів без дублів за id

const users4 = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "boB", age: 25 },
  { id: 2, name: "Alice", age: 17 },
  { id: 3, name: "daVid", age: 45 },
];
const mergeUniqueUsers = (users4) => {
  const uniqueUserMap = new Map();
  users4.forEach((user) => {
    uniqueUserMap.set(user.id, user);
  });
  return Array.from(uniqueUserMap.values());
};
console.log(mergeUniqueUsers(users4));
// повертає масив без дублів

//🔹 Задача 19: Підрахунок голосів
//Наприклад, об’єкт з типами відповідей → {yes: 3, no: 2}

const votes = ["yes", "no", "yes", "yes", "no"];

function countVotes(votes) {
  return votes.reduce((acc, vote) => {
    acc[vote] = (acc[vote] || 0) + 1;
    return acc;
  }, {});
}
console.log(countVotes(votes));

//🔹 Задача 20: Створи новий масив обʼєктів, де fullName = firstName + lastName

const users3 = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Brown" },
];

function getFullNames(array) {
  return array.map((user) => ({
    fullName: `${user.firstName} ${user.lastName}`,
  }));
}
console.log(getFullNames(users3));

// [{ fullName: 'Alice Smith' }, { fullName: 'Bob Brown' }]
