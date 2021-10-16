const player1 = {
  name: 'Scorpion',
  hp: 40,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Axe', 'Tanto'],
  attack: function() {
    console.log(player1.name + 'Fight...');
  }
}

const player2 = {
  name: 'Sub-Zero',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice Scepter', 'Ice Sword', 'Battle Axe'],
  attack: function() {
    console.log(player2.name + 'Fight...');
  }
};

function createPlayer(player, namePlayer) {
  const $player1 = document.createElement('div');
  $player1.classList.add(player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = namePlayer.hp + '%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = namePlayer.name;

  const $img = document.createElement('img');
  $img.src = namePlayer.img;

  $player1.appendChild($progressbar);
  $player1.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);