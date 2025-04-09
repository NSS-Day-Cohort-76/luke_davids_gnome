/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/
import { RequestForm } from "./RequestForm.js";
import { craftRequests } from "./CraftRequests.js";
import { Crafters } from "./Crafters.js";
import { Ingredients } from "./Ingredients.js";
import { Completion } from "./Completions.js";

export const GnomeMercy = async () => {

  const requestFormHTML = await RequestForm()
  const craftRequestHTML = await craftRequests()
  const craftersHTML = await Crafters()
  const ingredientsHTML = await Ingredients()
  const completionsHTML = await Completion()
  
  return `
    <h1>Gnome Mercy</h1>
    ${requestFormHTML} 

    <div class="section flex row">
        <div class="flex column">
        ${craftRequestHTML} 
        ${craftersHTML} 
    </div>
    ${ingredientsHTML}
    </div>
    ${completionsHTML}
    `

};