import changeCursor from './change_cursor.js';
import imgBang from '../img/bang.png';
import imgOuch from '../img/ouch.png';

export default class Goblin {
  constructor(goblin, field, mainCounter = 0, winPunches = 0, missPunches = 0) {
    this.goblin = goblin;
    this.field = field;
    this.mainCounter = mainCounter;
    this.winPunches = winPunches;
    this.missPunches = missPunches;
  }

  getZone() {
    if (this.mainCounter > 9 || this.missPunches > 4) {
      if (confirm('Game over! Press "ok" to repeat or "cancel" to exit.')) {
        window.location.reload(true);
      } else {
        window.close();
      }
    } else if (this.winPunches > 4) {
      if (confirm('You win! Wanna repeat?')) {
        window.location.reload(true);
      } else {
        window.close();
      }
    } else {
      this.field[Math.floor(Math.random() * this.field.length)].appendChild(this.goblin);
      this.mainCounter += 1;
    }
  }

  getClick() {
    document.addEventListener('click', (event) => {
      if (event.target.className === 'img_goblin') {
        changeCursor(imgBang);
        this.winPunches += 1;
        this.getRecord(this.winPunches, 'punchCount');
      } else {
        changeCursor(imgOuch);
        this.missPunches += 1;
        this.getRecord(this.missPunches, 'missCount');
      }
    });
  }

  getNextzone() {
    const currentZone = document.querySelector('.img_goblin').closest('.zone');
    const nextZone = this.field[Math.floor(Math.random() * this.field.length)];
    this.getClick();
    if (currentZone !== nextZone) {
      setInterval(() => {
        this.getZone();
      }, 1500);
    } else {
      this.getNextzone();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getRecord(prop, el) {
    const element = document.querySelector(`.${el}`);
    element.textContent = `${prop}`;
  }
}
