import './styles.css';
import dates from './dates.js';

const ideaElement = document.getElementById('text');

ideaElement.classList = 'hidden';

const len = dates.length;

const generatorButton = document.getElementById('generator-button');
const progressBar = document.getElementById('progress-bar');

generatorButton.addEventListener('click', () => {
  generatorButton.disabled = true;
  generatorButton.classList.add('neu-down');
  generatorButton.classList.remove('neu-up');
  progressBar.classList.remove('hidden');
  progressBar.style.animation = 'progress 1s linear forwards';

  setTimeout(() => {
    ideaElement.classList.remove('hidden');
    generatorButton.classList.add('neu-up');
    generatorButton.classList.remove('neu-down');
    const i = Math.floor(Math.random() * len);
    ideaElement.textContent = dates[i];
    progressBar.classList.add('hidden');
    progressBar.style.animation = 'none';
    generatorButton.disabled = false;
  }, 1000);
});

