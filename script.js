const btn = document.querySelector("button")
const quoteTxt = document.querySelector("h4")
const quoteAuthor = document.querySelector("p")

btn.addEventListener("click", (e) => {
  const url = "https://api.quotable.io/random"
  fetch(url)
    .then((data) => data.json())
    .then((jsonData) => toDOM(jsonData))
    .catch(err => err)
})

function toDOM(data) {
  quoteTxt.innerHTML = data.content
  quoteAuthor.innerHTML = data.author
}
