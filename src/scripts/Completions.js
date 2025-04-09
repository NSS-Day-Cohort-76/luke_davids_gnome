/*
  Responsibility
    Generate the HTML for all completed potions and elixirs
*/
import { createCraftIngredients } from "./dataAccess.js"
import { postCompletion } from "./dataAccess.js"


const handleCompletion = (clickEvent) => {
  if (clickEvent.target.id === "finishButton") {
    postCompletion()
    createCraftIngredients(parseInt(document.getElementById("requests").value))
  }
}

export const Completion = async () => {
  document.addEventListener("click", handleCompletion)
  const completions = await fetch(`http://localhost:8088/completions?_expand=craftRequest`).then(res => res.json())
  let html = `
    <button id="finishButton" class="button">Finish</button>
    <h3>Completed Potions and Elixirs</h3>
    <ul>`

  const completionString = completions.map ((obj) => {
    return `<li>${obj.craftRequest.name}</li>`
  })

  html += completionString.join("")
  html += `</ul`
  return html
}