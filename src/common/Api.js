import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./Utils/constant";

const AccessToken = async () => {
  let token = await AsyncStorage.getItem("AccessToken");
  return `Bearer ${token}`;
};

const ApiCall = async (endPoint, Method, headers, params) => {
  console.log("=====================API Call=======================");
  console.log(`APICALL ==>>>`, `${BASE_URL + endPoint}`, {
    method: Method,
    headers: headers,
    ...(params && { body: JSON.stringify(params) }),
  });
  console.log("======================================================");
  return fetch(`${BASE_URL + endPoint}`, {
    method: Method,
    headers: headers,
    ...(params && { body: params }),
  }).then(async (response) => {
    return [await response.json(), response.status];
  });
};

module.exports = {
  async Login(params) {
    console.log("data test: ",params)
    let headers = {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTk5ZTg0YmQyNmJiYjI4ZWI4NjJjZjg4Y2Q3OGRlNCIsInN1YiI6IjY1N2QzNzcxNWYyZGIxMDY1ZGRkZTM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WiLVmKWv0BrkYtmaGdt1-2A_Dd1WK5s3bL6jdsGEeMM'
    };

    return ApiCall(params, "GET", headers);
  },
};
