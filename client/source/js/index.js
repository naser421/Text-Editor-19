import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadswirly = () => {
  const swirly = document.createElement('div');
  swirly.classList.add('swirly');
  swirly.innerHTML = `
  <div class="loading-container">
  <div class="loading-swirly" />
  </div>
  `;
  main.appendChild(swirly);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadswirly();
}

if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}