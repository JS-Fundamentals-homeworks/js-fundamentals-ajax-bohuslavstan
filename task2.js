// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const input = document.getElementById("userNameInput");
const getUserBtn = document.getElementById("getUserButton");
const output = document.getElementById("userCity");

getUserBtn.addEventListener("click", () => {
  const inputValue = input.value;
  async function fetchUsers() {
    const req = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    });
    const getUsersList = await req.json();
    getUsersList.forEach((e) => {
      if (e.name === inputValue) {
        console.log(e.name);
        console.log(e.address.city);
        output.textContent=e.address.city;
      }
    });
  }
    fetchUsers();
});
