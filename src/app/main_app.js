import Goblin from './goblin.js';
import imgGoblin from '../img/goblin.png';

export default function mainFoo() {
  const field = document.createElement('div');
  field.classList = 'field';
  document.body.appendChild(field);

  const section = document.createElement('section');
  field.appendChild(section);

  let zonNum = 1;
  while (zonNum < 17) {
    const zone = document.createElement('div');
    zone.classList = 'zone';
    section.appendChild(zone);
    zonNum += 1;
  }

  const image = document.createElement('img');
  image.alt = 'goblin';
  image.classList = 'img_goblin';
  image.src = imgGoblin;
  document.body.appendChild(image);

  const goblin = new Goblin(document.querySelector('.img_goblin'), document.querySelectorAll('.zone'));
  goblin.getZone();
  goblin.getNextzone();
}
