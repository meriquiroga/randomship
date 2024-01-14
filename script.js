fetch("https://randomuser.me/api/?results=12")
  .then((response) => response.json())
  .then((data) => {
    createCard(data.results);
  });

function createCard(users) {
  let container = document.querySelector(".container");

  users.forEach((user) => {
    container.innerHTML += `
    <div class="card">
      <div class="firstBlock">
        <img class="img" src="${user.picture.large}" alt="" />
        <h4 class="name">${user.name.first} ${user.name.last}</h4>
        <div class="age">
            <p>Edad: ${user.registered.age}</p>
        </div>
        <div class="gender">
            <p class="genderText">${user.gender === "female" ? "MUJER" : "HOMBRE"}</p>
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
         <a class="button-text" href="https://wa.me/${user.phone}" target="_blank" rel="noreferrer">Conectar</a>
      </button>
   </div>
    `;
  });
}