export function selectFood(food) {
    return {type: "SELECT_FOOD", payload: food}
  }

  export function allFood(food) {
    // console.log("action")
    return {type: "ALL_FOOD", payload: food}
  }

  export function fetchUserFoods(food) {
    // console.log("action")
    return {type: "FETCH_USER_FOODS", payload: food}
  }

  export function addSessionFoods(food) {
    // console.log("action")
    return {type: "ADD_SESSION_FOODS", payload: food}
  }