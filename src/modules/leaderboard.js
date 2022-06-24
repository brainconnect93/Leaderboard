const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameId = 'eE5VQjNtf7MXYoQKF5qi';
const addScoreURL = `${baseURL + gameId}/scores/`;

// to craete the game ID

const createGame = async () => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'My Leaderboard game',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((json) => (json));
};

function scoreTable(scores) {
  let output = '';
  scores.forEach((user) => {
    output += `<li>${user.user}: ${user.score}</li>`;
  });
  document.querySelector('.lead-items').innerHTML = output;
}

// to fetch added score from the API
const fetchScore = async () => {
  await fetch(addScoreURL)
    .then((response) => response.json())
    .then((json) => scoreTable(json.result));
};

// To add score to the API
const addScore = async (user, score) => {
  await fetch(addScoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user, score,
    }),
  }).then((response) => response.json()).then((json) => {
    fetchScore();
  }).catch((error) => (error));
};

export { fetchScore, addScore };