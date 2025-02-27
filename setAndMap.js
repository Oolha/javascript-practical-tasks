// 1️⃣ Видалення дублікатів з масиву
// Напиши функцію removeDuplicates(arr), яка приймає масив і повертає новий масив без дублікатів.

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 2️⃣ Підрахунок унікальних значень
// Напиши функцію countUniqueValues(arr), яка приймає масив і повертає кількість унікальних значень у ньому.

function countUniqueValues(arr) {
  const unique = new Set(arr);
  return unique.size;
}

console.log(countUniqueValues([10, 20, 10, 30, 20, 40])); // 4
console.log(countUniqueValues([])); // 0

// 3️⃣ Частота слів у реченні
// Напиши функцію wordFrequency(sentence), яка приймає рядок і повертає Map, де ключ – слово, а значення – скільки разів воно зустрічається в реченні.

function wordFrequency(sentence) {
  const map = new Map();
  const words = sentence.split(" ");
  for (const word of words) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }
  return map;
}

console.log(wordFrequency("hello world hello again"));
// Map { 'hello' => 2, 'world' => 1, 'again' => 1 }

// 4️⃣ Перетворення об'єкта в Map
// Напиши функцію objectToMap(obj), яка приймає об'єкт і перетворює його в Map.

function objectToMap(obj) {
  return new Map(Object.entries(obj));
}

const obj = { name: "Alice", age: 25, job: "Developer" };
console.log(objectToMap(obj));
// Map { 'name' => 'Alice', 'age' => 25, 'job' => 'Developer' }

// 5️⃣ Підрахунок символів у рядку
// Напиши функцію charCount(str), яка приймає рядок і повертає Map, де ключ – символ, а значення – скільки разів він зустрічається.

function charCount(str) {
  const map = new Map();
  const array = Array.from(str);
  for (const arr of array) {
    if (map.has(arr)) {
      map.set(arr, map.get(arr) + 1);
    } else {
      map.set(arr, 1);
    }
  }
  return map;
}

console.log(charCount("banana"));
// Map { 'b' => 1, 'a' => 3, 'n' => 2 }

// 6️⃣ Перевірка на унікальність елементів у масиві
// Напиши функцію, яка перевіряє, чи всі елементи в масиві є унікальними. Якщо є дублікати, повернути false, інакше — true.

function checkUnique(arr) {
  const mySet = new Set(arr);
  return mySet.size === arr.length;
}

console.log(checkUnique([1, 2, 3, 4])); // true
console.log(checkUnique([1, 2, 2, 4])); // false

// 7️⃣ Об'єднання двох масивів без дублювання
// Напиши функцію, яка об'єднує два масиви і видаляє з них дублікати.

function mergeArrays(arr1, arr2) {
  const newSet = new Set([...arr1, ...arr2]);
  return Array.from(newSet);
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays([10, 20], [20, 30])); // [10, 20, 30]

// 8️⃣ Пошук найпоширенішого елемента в масиві
// Напиши функцію, яка повертає найпоширеніший елемент у масиві.

function mostFrequentElement(arr) {
  const map = new Map();

  for (const el of arr) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  }
  let mostFrequent = null;
  let maxCount = 0;

  for (const [el, count] of map) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = el;
    }
  }
  return mostFrequent;
}

console.log(mostFrequentElement([1, 2, 2, 3, 3, 3, 4])); // 3
console.log(mostFrequentElement([5, 5, 5, 1, 1])); // 5
