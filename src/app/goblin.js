import changeCursor from './change_cursor.js';
import imgBang from '../img/bang.png';
import imgOuch from '../img/ouch.png';

export default class Goblin {
  constructor(goblin, field, mainCounter = 0, winPunches = 0) {
    this.goblin = goblin;
    this.field = field;
    this.mainCounter = mainCounter;
    this.winPunches = winPunches;
  }

  getZone() {
    if (this.mainCounter > 5) {
      alert('you lose!');
    } else if (this.winPunches > 9) {
      alert('you win!');
    } else {
      this.field[Math.floor(Math.random() * this.field.length)].appendChild(this.goblin);
      this.mainCounter += 1;
    }
  }

  getClick() {
    document.addEventListener('click', (event) => {
      if (event.target.className === 'img_goblin') {
        changeCursor(imgBang);
        this.mainCounter -= 1;
        this.winPunches += 1;
      } else {
        changeCursor(imgOuch);
        this.mainCounter += 1;
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
      }, 1000);
    } else {
      this.getNextzone();
    }
  }
}
