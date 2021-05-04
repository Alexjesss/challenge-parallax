const character = document.querySelector('.character');
const pixelSubstraction = 10;

character.style.position = 'relative';
character.style.left = '350px';
character.style.top = '385px';

function keyControls(e) {
    let keys = e.key
   switch(keys){
       case 'ArrowLeft':
           moveLeft();
           break;
       case 'ArrowRight':
           moveRight();
           break;
       case 'ArrowUp':
           jump();
           break;
   }
   console.log(keys)
}

function moveLeft() {
    character.style.left = parseInt(character.style.left) - pixelSubstraction + 'px';
}

function moveRight() {
    character.style.left = parseInt(character.style.left) + pixelSubstraction + 'px';
}

function jump() {
    character.style.top = parseInt(character.style.left) + pixelSubstraction + 'px';
}


document.addEventListener('keydown', function (e) {
    keyControls(e);
});






