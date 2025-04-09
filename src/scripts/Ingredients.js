/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/
import { setIngredients } from "./dataAccess.js"

const handleIngredientChange = (changeEvent) => {
  if (changeEvent.target.name === "ingredient") {
    setIngredients(parseInt(changeEvent.target.value))
  }
}

export const Ingredients = async () => {
  document.addEventListener("change", handleIngredientChange)

  const craftIngredients = await fetch(`http://localhost:8088/ingredients`).then(res => res.json())
  
  let html = `
      <div class="section flex column">
      <h3>Crafting Ingredients</h3>

      <div class="flex row">
        <section class= "flex column">`

        for (let i = 0; i < 9; i++) {
          html +=
          `<div><input type="checkbox" value="${craftIngredients[i].id}" name="ingredient">
          ${craftIngredients[i].name}</div>`
        }
        html += `</section>
        <section class= "flex column">`
        for (let i = 9; i < craftIngredients.length; i++) {
          html +=
          `<div><input type="checkbox" value="${craftIngredients[i].id}" name="ingredient">${craftIngredients[i].name}</div>`
        }

    html += `</section></div></div>`
    return html

}
