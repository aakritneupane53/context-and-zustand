import { instance } from "../axios-client/axios";

export default async function loginServices(email, password) {
  try {
    const response = await instance.get("http://localhost:3000/login");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
