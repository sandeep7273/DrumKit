var button = document.querySelectorAll('button')
for(i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
var buttonInnerHTNL = this.innerHTML;     
        makeSound(buttonInnerHTNL);
        buttonAnimation(buttonInnerHTNL);
    });
}
      
document.addEventListener("keyup", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(event){
        switch (event) {
            case "a":
                var tom1 = new Audio('tom-1.mp3');
            tom1.play();
        break;
            case "w":
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
        break;
           case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
        break;
           case "d":
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
        break;
           case "j":
            var crash = new Audio('crash.mp3');
            crash.play();
        break;
            case "k":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
        break;
            case "l":
            var snare = new Audio('snare.mp3');
            snare.play();
        break;     
            default:
                console.log(event);
                break;
        }  
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}