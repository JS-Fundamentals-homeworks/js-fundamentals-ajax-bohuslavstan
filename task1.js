// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js

const usersList = document.querySelector("ul.usersList");

async function fetchUsers() {
  const req = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const getUsersList = await req.json();
  getUsersList.forEach((e) => {
    const li = document.createElement("li");
    usersList.appendChild(li);
    li.textContent = e.name;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  fetchUsers();
});
