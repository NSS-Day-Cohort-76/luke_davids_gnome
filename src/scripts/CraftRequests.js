/*
  Responsibility
    Generate HTML for the dropdown of craftRequests.

    Criteria:
      * Only incomplete requests should be converted to options
*/
import { setCraftRequestId } from "./dataAccess.js"

const handleCraftRequestChange = (changeEvent) => {
    if (changeEvent.target.id === "requests") {
      setCraftRequestId(parseInt(changeEvent.target.value))      
    }
}
export const craftRequests = async () => {
  document.addEventListener("change", handleCraftRequestChange)

  const requests = await fetch(`http://localhost:8088/craftRequests`).then(res => res.json())
  const completedRequests = await fetch(`http://localhost:8088/completions`).then(res => res.json())

  const completedIds = new Set(completedRequests.map(obj => obj.craftRequestId))
  const incompleteRequests = requests.filter(obj => !completedIds.has(obj.id))

  let html = `
      <h3>Craft Requests</h3>
      <select name="selectType" id="requests" class="select">
      <option value="none">--Choose A Request--</option>`

    const craftRequestString = incompleteRequests.map((obj) => {
      return `<option value="${obj.id}">${obj.name}</option>`
  })
    
      
    html += craftRequestString.join("")  
    html += `</select>`
    return html
}
