export const database = {
    crafters: [
      {
        "id": 1,
        "name": "Wispmaral",
        "bio": "She's arrogant, scornful and observant. Which isn't out of the ordinary for someone with her gruesome past. She was born and grew up in a poor family in a broken community, she lived out of trouble until she was about 5 years old, but at that point everything changed. She lost his siblings in a revolution and was initiated in a gang. Without any help she had to survive in a pitiless world. But with his inginuity and vigor, she managed to go beyond expectations and find a new home."
      },
      {
        "id": 2,
        "name": "Flammedra",
        "bio": "She's scornful, frank and precise. She was born and grew up in a fairly rich family in a large town, she lived out of trouble until she was about 13 years old. She lost her mother in a food shortage and was headed for a life of misery. With the help of a suspicious stranger she had to survive in a odd world. But with her inginuity and determination, she managed to overcome all odds and face all obstacles. This has turned her into the woman she is today."
      },
      {
        "id": 3,
        "name": "Mireille",
        "bio": "She's ambitious, hardy and keen. But there's more than meets the eye, not surprising for somebody with her ugly past. She was born and grew up in a lower class family in a broken capital. She killed somebody by accident during a natural disaster and was forsaken by all. With the help of a small group of strangers she had to survive in a bleak world. But with her charm and talents, she managed to start a new life and conquer all fears and doubts."
      }
    ],
    craftTypes: [
      {
        "id": 1,
        "type": "Potion"
      },
      {
        "id": 2,
        "type": "Elixir"
      }
    ],
    ingredients: [
      {
        "id": 1,
        "name": "Watermelon Juice"
      },
      {
        "id": 2,
        "name": "Plums"
      },
      {
        "id": 3,
        "name": "Red Wine"
      },
      {
        "id": 4,
        "name": "Black Olive Paste"
      },
      {
        "id": 5,
        "name": "Green Mold"
      },
      {
        "id": 6,
        "name": "Spider Eyes"
      },
      {
        "id": 7,
        "name": "Canned Toad Kidneys"
      },
      {
        "id": 8,
        "name": "Willow Bark"
      },
      {
        "id": 9,
        "name": "Grape Soda"
      },
      {
        "id": 10,
        "name": "Smoked Halibut Gills"
      },
      {
        "id": 11,
        "name": "Mushroom Spirits"
      },
      {
        "id": 12,
        "name": "Boysenberry"
      },
      {
        "id": 13,
        "name": "Poison Sumac"
      },
      {
        "id": 14,
        "name": "Shark Tail"
      },
      {
        "id": 15,
        "name": "Asian Pear"
      }
    ],
    craftRequests: [
      {
        "name": "Broken Brains Brew",
        "intendedUse": "Causes confusion.",
        "craftTypeId": 1,
        "id": 1
      },
      {
        "name": "Flask of Fetches",
        "intendedUse": "Brings the user what she asks for.",
        "craftTypeId": 1,
        "id": 2
      },
      {
        "name": "Then Success Elixir",
        "intendedUse": "Alleviates broken promises.",
        "craftTypeId": 2,
        "id": 3
      },
      {
        "name": "Love Potion",
        "intendedUse": "For loooove",
        "craftTypeId": 1,
        "id": 4
      },
      {
        "name": "Beautification",
        "intendedUse": "To make everyone around me pretty",
        "craftTypeId": 2,
        "id": 5
      },
      {
        "name": "Ugly Potion",
        "intendedUse": "Causes the ugly",
        "craftTypeId": 1,
        "id": 6
      },
      {
        "name": "Elixir of Life",
        "intendedUse": "My grandma needs a few extra years",
        "craftTypeId": 2,
        "id": 7
      },
      {
        "name": "Lovesick Elixir of Love",
        "intendedUse": "Enable someone to hate another person",
        "craftTypeId": 2,
        "id": 8
      }
    ],
    completions: [
      {
        "crafterId": 1,
        "craftRequestId": 2,
        "id": 1
      },
      {
        "crafterId": 1,
        "craftRequestId": 1,
        "id": 2
      },
      {
        "crafterId": 3,
        "craftRequestId": 4,
        "id": 3
      },
      {
        "crafterId": 2,
        "craftRequestId": 7,
        "id": 4
      },
      {
        "crafterId": 2,
        "craftRequestId": 3,
        "id": 5
      },
      {
        "crafterId": 1,
        "craftRequestId": 1,
        "id": 6
      },
      {
        "crafterId": 2,
        "craftRequestId": 1,
        "id": 7
      }
    ],
    craftIngredients: [
      {
        "ingredientId": 15,
        "completionId": 2,
        "id": 1
      },
      {
        "ingredientId": 13,
        "completionId": 2,
        "id": 2
      },
      {
        "ingredientId": 10,
        "completionId": 2,
        "id": 3
      },
      {
        "ingredientId": 7,
        "completionId": 2,
        "id": 4
      },
      {
        "ingredientId": 3,
        "completionId": 2,
        "id": 5
      },
      {
        "ingredientId": 1,
        "completionId": 3,
        "id": 6
      },
      {
        "ingredientId": 2,
        "completionId": 3,
        "id": 7
      },
      {
        "ingredientId": 12,
        "completionId": 4,
        "id": 8
      },
      {
        "ingredientId": 11,
        "completionId": 4,
        "id": 9
      },
      {
        "ingredientId": 10,
        "completionId": 4,
        "id": 10
      },
      {
        "ingredientId": 11,
        "completionId": 5,
        "id": 11
      },
      {
        "ingredientId": 9,
        "completionId": 5,
        "id": 12
      },
      {
        "ingredientId": 7,
        "completionId": 5,
        "id": 13
      },
      {
        "ingredientId": 6,
        "completionId": 5,
        "id": 14
      },
      {
        "ingredientId": 2,
        "completionId": 6,
        "id": 15
      },
      {
        "ingredientId": 3,
        "completionId": 6,
        "id": 16
      },
      {
        "ingredientId": 4,
        "completionId": 6,
        "id": 17
      },
      {
        "ingredientId": 5,
        "completionId": 6,
        "id": 18
      },
      {
        "ingredientId": 6,
        "completionId": 6,
        "id": 19
      },
      {
        "ingredientId": 7,
        "completionId": 6,
        "id": 20
      },
      {
        "ingredientId": 5,
        "completionId": 7,
        "id": 21
      },
      {
        "ingredientId": 11,
        "completionId": 7,
        "id": 22
      },
      {
        "ingredientId": 7,
        "completionId": 7,
        "id": 23
      },
      {
        "ingredientId": 4,
        "completionId": 7,
        "id": 24
      }
    ]
  }

  export const getCrafters = () => {
    return structuredClone(database.crafters)
  }

  export const getCraftTypes = () => {
    return structuredClone(database.craftTypes)
  }

  export const getIngredients = () => {
    return structuredClone(database.ingredients)
  }

  export const getCraftRequests = () => {
    return structuredClone(database.craftRequests)
  }

  export const getCompletions = () => {
    return structuredClone(database.completions)
  }

  export const getCraftIngredients = () => {
    return structuredClone(database.craftIngredients)
  }