import Goblin from './goblin.js';
import imgGoblin from '../img/goblin.png';

export default function mainFoo() {
  const field = document.createElement('div');
  field.classList = 'field';
  document.body.appendChild(field);

  const section = document.createElement('section');
  field.appendChild(section);

  let zonNum = 1;
  while (zonNum < 16) {
    const zone = document.createElement('div');
    zone.classList = 'zone';
    section.appendChild(zone);
    zonNum += 1;
  }

  const sidebar = document.createElement('div');
  sidebar.classList = 'sidebar';
  document.body.appendChild(sidebar);

  const image = document.createElement('img');
  image.alt = 'goblin';
  image.classList = 'img_goblin';
  image.src = imgGoblin;
  document.body.appendChild(image);

  const goblin = new Goblin(document.querySelector('.img_goblin'), document.querySelectorAll('.zone'));
  goblin.getZone();
  goblin.getNextzone();

  const punchInfo = document.createElement('div');
  sidebar.appendChild(punchInfo);
  punchInfo.textContent = 'Punches for win: 5. Your punches: ';

  const punchCount = document.createElement('span');
  punchCount.classList = 'punchCount';
  punchCount.textContent = '0';
  punchInfo.appendChild(punchCount);

  const missInfo = document.createElement('div');
  sidebar.appendChild(missInfo);
  missInfo.textContent = 'Misses: ';

  const missCount = document.createElement('span');
  missCount.classList = 'missCount';
  missCount.textContent = '0';
  missInfo.appendChild(missCount);
}
