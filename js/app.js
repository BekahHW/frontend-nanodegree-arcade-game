// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = 0;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.speed = Math.floor(Math.random() * dt + 2);

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(){
this.sprite = 'images/char-cat-girl.png';
 this.x=100;
 this.y=200;
  update(dt)

  render()

  handleInput()

  // if (this.y = 600) {
  //   alert You have won!
  // }
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
enemy1 = new Enemy(60)
enemy2 = new Enemy(100)
enemy3 = new Enemy(200)
player = new Player(100, 100)
// Place all enemy objects in an array called allEnemies

let allEnemies = [enemy1, enemy2, enemy3]

// Place the player object in a variable called player
const player = {}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        player.x -= player.speed;
    }
    if (keyPress == 'right') {
        player.x += player.speed;
    }
    if (keyPress == 'down') {
        player.y -= player.speed;
    }
    if (keyPress == 'up') {
        player.x += player.speed;
    }
}
