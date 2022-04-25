import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function signUp(email, firstName,password) {
  const response = await api.post("/user/signup", {email, firstName, password})
  return response.data
}

async function login(username, password) {
  const response = await api.post("/user/login", { username, password });
  console.log(response.status);
  console.log(response.data);
  return response.data;
}

async function fetchScore(email) {
  const response = await api.get(`game/getlastscore/:${email}`);
  return response.data;
}

async function fetchHighScore(email) {
  const response = await api.get(`game/gethighscore/:${email}`);
  return response.data;
}

async function addScore(score) {
  const response = await api.post("game/addscore", score);
}

export { login, fetchScore, addScore, signUp,fetchHighScore, setAuthHeader };

