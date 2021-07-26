let form = document.querySelector("form");
let root = document.querySelector("ul");

let cardData = [
  {
    title: "",
    category: "",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = event.target.elements.title.value;
  let category = event.target.elements.category.value;
  cardData.push({ title, category });
});

function createUI(data, root) {
  let fragment = new DocumentFragment();
  data.forEach((cardInfo) => {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = cardInfo.category;
    let h2 = document.createElement("h2");
    h2.innerText = cardInfo.title;
    li.append(p, h2);
    fragment.appendChild(li);
  });
  root.append(fragment);
}

