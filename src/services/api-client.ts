import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params:{
    key: "00ef34d494f04cc7aefcb73eb3f9ac9f"
  }
})