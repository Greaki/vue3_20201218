import axios from "axios";

export interface DogInterface {
  message: string;
  status: string;
}

export const getDogs = () => {
  return axios.get<DogInterface>("https://dog.ceo/api/breeds/image/random")
}
