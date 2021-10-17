const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Axe', 'Tanto'],
  attack: function() {
    console.log(player1.name + 'Fight...');
  }
}

const player2 = {
  player: 2,
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice Scepter', 'Ice Sword', 'Battle Axe'],
  attack: function() {
    console.log(player2.name + 'Fight...');
  }
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(namePlayer) {
  const $player1 = createElement('div', 'player' + namePlayer.player);

  const $progressbar = createElement('div', 'progressbar');

  const $character = createElement('div', 'character');

  const $life = createElement('div', 'life');
  $life.style.width = namePlayer.hp + '%';

  const $name = createElement('div', 'name');
  $name.innerText = namePlayer.name;

  const $img = createElement('img');
  $img.src = namePlayer.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);

  return $player1;
}

function changeHP(player) {
  const $playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = player.hp + '%';

  if (player.hp <= 0) {
    player.hp = 0;
    console.log(player.hp);

    if (player1.hp > player2.hp) {
    $arenas.appendChild(playerWin(player1.name));
    }
    else if (player2.hp > player1.hp) {
    $arenas.appendChild(playerWin(player2.name));
    }
    else if (player1.hp == 0 && player2.hp == 0) {
    $arenas.appendChild(playerNobodyWins());
    }
    $randomButton.disabled = true;
  }
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' wins';

  return $winTitle;
}

function playerNobodyWins() {
  const $nobodyWinTitle = createElement('div', 'nobodyWinTitle');
  $nobodyWinTitle.innerText = 'Nobody wins';

  return $nobodyWinTitle;
}

$randomButton.addEventListener('click', function() {
  console.log('####: Click Random Button');
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
