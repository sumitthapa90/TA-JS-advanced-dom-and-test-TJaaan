let root = document.querySelector("ul");

let max = 3;
let index = 0;

function addQuotes() {
  for (let i = 0; i < max; i++) {
    let li = document.createElement("li");
    let blockQuotes = document.createElement("blockquote");
    blockQuotes.innerText = quotes[index].quoteText;
    let p = document.createElement("p");
    p.innerText = quotes[index].quoteAuthor;
    li.append(blockQuotes, p);
    root.append(li);
    index++;
  }
}

addQuotes();

document.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
    addQuotes();
  }
});

window.addEventListener("DomContentLoader", () => {
  alert("The Content of the DOM Is Loaded");
  addQuotes();
});
