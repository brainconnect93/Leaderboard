import './styles.css';
import { fetchScore, addScore } from './modules/leaderboard.js';

const form = document.querySelector('#lead-form');
const userInput = document.querySelector('#user-name');
const scoreInput = document.querySelector('#user-score');
const refresh = document.querySelector('.lead-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(userInput.value, scoreInput.value);
  form.reset();
});

refresh.addEventListener('click', () => {
  fetchScore();
});