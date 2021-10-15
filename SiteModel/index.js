let participants = {
  actors: [
    {
      img: "/assets/CarryCoon.png",
      name: "Кэрри Кун",
      enName: "Carrie Coon",
      bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
    },
    {
      img: "/assets/CarryCoon.png",
      name: "Кэрри Кун",
      enName: "Carrie Coon",
      bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
    },
    {
      img: "/assets/CarryCoon.png",
      name: "Кэрри Кун",
      enName: "Carrie Coon",
      bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
    },
    {
      img: "/assets/CarryCoon.png",
      name: "Кэрри Кун",
      enName: "Carrie Coon",
      bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
    },
    {
      img: "/assets/CarryCoon.png",
      name: "Кэрри Кун",
      enName: "Carrie Coon",
      bio: "https://ru.wikipedia.org/wiki/Кун,_Кэрри",
    },
  ],
  creators: [
    {
      img: "/assets/Bill Murray.png",
      name: "Билл Мюррей",
      enName: "Bill Murray",
      bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
    },
    {
      img: "/assets/Bill Murray.png",
      name: "Билл Мюррей",
      enName: "Bill Murray",
      bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
    },
    {
      img: "/assets/Bill Murray.png",
      name: "Билл Мюррей",
      enName: "Bill Murray",
      bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
    },
    {
      img: "/assets/Bill Murray.png",
      name: "Билл Мюррей",
      enName: "Bill Murray",
      bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
    },
    {
      img: "/assets/Bill Murray.png",
      name: "Билл Мюррей",
      enName: "Bill Murray",
      bio: "https://ru.wikipedia.org/wiki/Мюррей,_Билл",
    },
  ],
};

showParticipants(participants.actors);

function showParticipants(items) {
  let castBlock = document.querySelector(".cast");
  castBlock.innerHTML = "";
  items.forEach((actor) => {
    let div = document.createElement("div");
    div.innerHTML = `<a href="${actor.bio}" target="_blank" class="col-3 d-flex mb-4">
        <img src="${actor.img}">
        <div class="actor d-flex align-items-center">
            <div>
                <b>${actor.name}</b>
                <p class="m-0">${actor.enName}</p>
            </div>
        </div>
    </a>`;
    castBlock.append(div.firstElementChild);
  });
}
let bottomBlock = document.querySelector(".bottom");
bottomBlock.addEventListener("click", (event) => {
  let button = event.target.closest("[data-key]");
  console.log(button);
  if (!button) {
    return;
  }
  if (button.dataset.key == "creators") {
    bottomBlock.classList.add("creators");
  } else {
    bottomBlock.classList.remove("creators");
  }
  showParticipants(participants[button.dataset.key]);
});

function toggleModal() {
  const modal = document.querySelector(".my-modal");
  modal.classList.toggle("show");
}
