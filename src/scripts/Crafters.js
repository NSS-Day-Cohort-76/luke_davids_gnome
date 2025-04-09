import { setCrafter } from "./dataAccess.js";


const handleCrafterChange = (changeEvent) => {
  if (changeEvent.target.id === "crafter") {
    setCrafter(parseInt(changeEvent.target.value))
  }
}
export const Crafters = async () => {
  document.addEventListener("change", handleCrafterChange)

  const crafters = await fetch(`http://localhost:8088/crafters`).then(res => res.json())
  let html = `
    <h3>Crafters</h3>
    <select id="crafter">
        <option value="0" required>--Choose A Crafter--</option>`
  
  const crafterString = crafters.map( obj =>
  `<option value="${obj.id}">${obj.name}</option>`)
  
  html += crafterString.join("")
  html += `</select>`
  return html
};
