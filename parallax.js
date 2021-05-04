const character = document.querySelector('.character');
const pixelSubstraction = 10;

character.style.position = 'relative';
character.style.left = '350px';
character.style.top = '385px';
let gravity = 1;


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
    let goUp = setInterval(function (){
        if (character.style.top > 25){
            clearInterval(goUp);
            let goDown = setInterval(function(){
                if (character.style.top < 0){
                    clearInterval(goDown);}
                character.style.top = parseInt(character.style.top) - pixelSubstraction + 'px';
            },20)
        }
        character.style.top += gravity;
        character.style.top = parseInt(character.style.top) - pixelSubstraction + 'px';
    }, 20)
}


document.addEventListener('keydown', function (e) {
    keyControls(e);
});






