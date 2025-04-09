/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/
import { createCraftRequest } from "./dataAccess.js";
import { postCraftRequest } from "./dataAccess.js";

const handleRequest = (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
    postCraftRequest()
  }
}

const handleChangeEvent = (changeEvt) => {
  if (changeEvt.target.id === "name" ||
      changeEvt.target.id === "purpose" ||
      changeEvt.target.id === "type") {
    const name = document.getElementById("name").value
    const intendedUse = document.getElementById("purpose").value
    const craftId = parseInt(document.getElementById("type").value)
    createCraftRequest(name, intendedUse, craftId)
  }
}



export const RequestForm = async () => {
  document.addEventListener("click", handleRequest)
  document.addEventListener("change", handleChangeEvent)

  const craftTypes = await fetch(`http://localhost:8088/craftTypes`).then(res => res.json())
  let html = `
    <div class="flex column section">
    
     <label class="label" for="name">Name</label>
     <input type="text" id="name" class="input" required>
     
     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input" required>
     
     <label class="label" for="type">Type</label>
     <select id="type" class="select">

      <option value="none" class="select dropdown">Select a Type</option>`

    const craftTypeString = craftTypes.map(obj => 
      `<option value="${obj.id}" class="select dropdown">${obj.type}</option>`)


    html += craftTypeString.join("")
    
    let completionId = 1
    html += `
    </select>
    <button class="button" value="${completionId++}" id="submitRequest">Submit Request</button>
    </div>`
    
  return html;
};
