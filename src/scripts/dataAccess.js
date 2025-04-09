
const userChoices = {
    crafterId: 0,
    craftRequestId: 0
  }
  
export const chosenIngredients = new Set()

const newCraftRequest = {
  name: "",
  intendedUse: "",
  craftTypeId: 0
}

/* 
  Once a new craft completion has been saved in the API,
  add all of the ingredients chosen by the user. 
*/
export const createCraftIngredients = async (completion) => {

  const fetchArray = [...chosenIngredients].map(
    (chosenIngredientId) => { 
      fetch(`http://localhost:8088/craftIngredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ingredientId: chosenIngredientId,
            completionId: completion
          })
        })
          .then((response) => response.json())
          .then(() => {
            console.log("Fetch call done");
          })
      ;
    });

  // This is where all the fetches (Promises) all run and resolve
  Promise.all(fetchArray).then(() => {
    console.log("All fetches complete");
    chosenIngredients.clear();
  });
};

export const setIngredients = (id) => {
  if (!chosenIngredients.has(id)) {
    chosenIngredients.add(id)
  }
};

export const setCrafter = (chosenCrafterId) => {
  userChoices.crafterId = chosenCrafterId
}

export const setCraftRequestId = (requestId) => {
  userChoices.craftRequestId = requestId
}

export const createCraftRequest = (name, intendedUse, craftId) => {
  newCraftRequest.name = name
  newCraftRequest.intendedUse = intendedUse
  newCraftRequest.craftTypeId = craftId
}

export const postCraftRequest = async () => {
  if (newCraftRequest.name !== "" &&
      newCraftRequest.intendedUse !== "" &&
      newCraftRequest.craftTypeId > 0)
  {  
    const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newCraftRequest)
    }
    const response = await fetch("http://localhost:8088/craftRequests", postOptions)
    
    document.dispatchEvent(new CustomEvent("craftRequestSubmitted"))
  }
  else {
    alert("Please complete all required request fields")
  }
}

export const postCompletion = async () => {
  if (userChoices.craftRequestId > 0 &&
    userChoices.crafterId > 0 &&
    chosenIngredients.size > 0
) {
    const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(userChoices)
    }
    const response = await fetch("http://localhost:8088/completions", postOptions)
    
    document.dispatchEvent(new CustomEvent("orderComplete"))
}

else {
    alert("Please complete all required craft selections")
}
}