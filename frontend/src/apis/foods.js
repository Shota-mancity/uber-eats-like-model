// --- ここから追加 ---
import axios from "axios";
import { foodsIndex } from "../urls/index";

export const fetchFoods = restaurantId => {
  return axios
    .get(foodsIndex(restaurantId))
    // axios.get(http://localhost:3000/api/v1/restaurants/999/foods)
    .then(res => {
      return res.data;
    })
    .catch(e => console.error(e));
};
// --- ここまで追加 ---
