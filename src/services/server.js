import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
async function signUp(email, firstName,lastName, password,confirmPassword) {
  const response = await api.post("/user/signup", {email:email, firstName:firstName, lastName:lastName, password: password,confirmPassword:confirmPassword})
  console.log(response)
  return response.data;
}

async function authenticateUser(username, password) {
  try{
    const response = await api.post("/user/login", { username, password });
    console.log(response.status);
    console.log(response.data);
    return response.data;  
  }
  catch(error){
    throw Error(error.response.message)
  }
}

async function fetchScore(email) {
  const response = await api.get(`/game/getlastscore/${email}`);
  return response.data.score;
}

async function fetchHighScore(email) {
  const response = await api.get(`/game/gethighscore/${email}`);
  return response.data.score;
}

async function addScore(score) {
  const response = await api.post("game/addscore", score);
  return response.data;
}

export { authenticateUser, fetchScore, addScore, signUp,fetchHighScore, setAuthHeader };

