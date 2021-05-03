function animation(){
    let ground = document.getElementById('ground');
    let startingPosition = 0;
    clearInterval(id);
    id = setInterval(animate,2000);

    function animate(){
        if (startingPosition === 300){
            clearInterval(id);
        }
        else {
            startingPosition++;
        }
    }
}
