

const baseURL = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";
const gameId = "eE5VQjNtf7MXYoQKF5qi";
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
   
  