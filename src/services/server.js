import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080",
});

function setAuthHeader(token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}

async function login(username, password) {
  const response = await api.post("/login", { username, password });
  return response.data;
}

async function fetchScore() {
  const response = await api.get(`/getlastscore`);
  return response.data;
}

async function fetchHighScore() {
  const response = await api.get(`/gethighscore`);
  return response.data;
}

async function addScore(score) {
  const response = await api.post("/addscore", score);
  return response.data;
}

export { login, fetchScore, addScore, fetchHighScore, setAuthHeader };

// function convertServerNotes(notes) {
//   return notes.map((note) => serverNote2AppNote(note));
// }

// function serverScore2AppScore(score) {
//   return { ...score, date: new Date(score.score_date) };
// }
