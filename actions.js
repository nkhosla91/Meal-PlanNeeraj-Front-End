export function selectFood(food) {
    return {type: "SELECT_FOOD", payload: food}
  }

  export function allFood(food) {
    // console.log("action")
    return {type: "ALL_FOOD", payload: food}
  }