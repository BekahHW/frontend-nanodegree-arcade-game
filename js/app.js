"use strict";
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x +=  this.speed * (dt) ;

  if (this.x > 400) {
    this.x = 0
    this.speed = Math.floor(Math.random()* 160)
  }
// collision check
// x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight
  if (this.x> player.x && player.x + 30 && this.y > player.y && this.y
     < player.y + 25 ){
    player.y = 275;
    player.x = 200;
    console.log('pears')
  }
}
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y, speed){
this.sprite = 'images/char-boy.png';
 this.x= x;
 this.y= y;
 this.speed= speed;


}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function(dt) {
// keep player on screen
if (this.x > 400) {
  this.x = 400
}
if (this.x < 0) {
  this.x = 0
}
if (this.y > 500) {
this.y = 500
}
if (this.y < -20) {
  this.y = -20
}
if (this.y <= -20) {
  // movement happens after
  alert ("Congratulations! You've won!")
  this.y= 275
}
}
// Now instantiate your objects.

var player = new Player(200, 275, 50)
// Place all enemy objects in an array called allEnemies

var allEnemies = [
new Enemy(0, 50, 25),
new Enemy(50, 150, 35),
new Enemy(25, 240, 45)
]

// Place the player object in a variable called player



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
        player.y += player.speed;
    }
    if (keyPress == 'up') {
        player.y -= player.speed;
    }
}
