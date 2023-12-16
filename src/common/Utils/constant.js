import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

// export const BASE_URL = "https://api.themoviedb.org/3/account/20836879/lists?page=1";
export const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming?&page=";
// export const BASE_URL = "https://jsonplaceholder.typicode.com";

export const { height, width } = Dimensions.get("window");

export const scaledSized = (size) => {
  return RFValue(size, height);
};
