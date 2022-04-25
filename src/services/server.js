import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
async function signUp(email, firstName,password) {
  const response = await api.post("/user/sigup", {email, firstName, password})
}

async function authenticateUser(username, password) {
  const response = await api.post("/user/login", { username, password });
  console.log(response.status);
  console.log(response.data);
  return response.data;
}

async function fetchScore(email) {
  const response = await api.get(`/getlastscore/:${email}`);
  return response.data;
}

async function fetchHighScore(email) {
  const response = await api.get(`/gethighscore/:${email}`);
  return response.data;
}

async function addScore(score) {
  const response = await api.post("game/addscore", score);
  return response.data;
}

export { authenticateUser, fetchScore, addScore, signUp,fetchHighScore, setAuthHeader };

// function convertServerNotes(notes) {
//   return notes.map((note) => serverNote2AppNote(note));
// }

// function serverScore2AppScore(score) {
//   return { ...score, date: new Date(score.score_date) };
// }
