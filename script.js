const list = document.getElementById("list");
const search = document.getElementById("search");

const listUsers = [];

getUsers();

search.addEventListener("input", (e) => filterUsers(e.target.value));

async function getUsers() {
  const response = await fetch("https://randomuser.me/api?results=40");

  const { results } = await response.json();

  list.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listUsers.push(li);

    li.innerHTML = `
    <div class="card">
          <div class="firstBlock">
            <img class="img" src="${user.picture.large}" alt="" />
            <h4 class="name">${user.name.first}</h4>
            <h4 class="name">${user.name.last}</h4>

            <div class="age">
                <p>Edad: ${user.registered.age}</p>
            </div>
            <div class="gender">
                <p class="genderText">${
                  user.gender === "female" ? "MUJER" : "HOMBRE"
                }</p>
            </div>
            <div class="info">
                <i class="fas fa-xs fa-phone fa-rotate-90"></i>
                <p>${user.phone}</p>
            </div>
            <div class="info">
                <p>${user.location.city} | ${user.location.country}</p>
            </div>
          </div>
          <button class="button">
             <a class="buttonText" href="https://wa.me/${
               user.phone
             }" target="_blank" rel="noreferrer">Conectar</a>
          </button>
       </div>
      `;
    list.appendChild(li);
  });
}

function filterUsers(searchValue) {
  listUsers.forEach((user) => {
    if (
      user.innerText
        .split("\n", 2)[0]
        .toLowerCase()
        .startsWith(searchValue.toLowerCase()) ||
      user.innerText
        .split("\n", 2)[1]
        .toLowerCase()
        .startsWith(searchValue.toLowerCase())
    ) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
