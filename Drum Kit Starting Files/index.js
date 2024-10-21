$(document).ready(function(){
    console.log($("img").attr("src"));
for(let i =0;i<($(".drum").length);i++){
    $("button")[i].addEventListener("click",handleClick);
    }

function handleClick(){
    
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    ButtonAnimation(buttonInnerHtml);

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    ButtonAnimation(event.key);
});
    
    // document.querySelectorAll(".drum")[0].addEventListener("keydown",function(event){
    //     makeSound(event.key);
    // });

function makeSound(key){
    
    switch (key) {
        case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play(); 
                // $("a").attr("href","https://www.yahoo.com/");
                // $("h1").text(key);
            break;
        case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play(); 
            break;
        case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play(); 
            break;
        case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play(); 
            break;
        case "j":
                let snare = new Audio("./sounds/snare.mp3");
                snare.play(); 
            break;
        case "k":
                let crash = new Audio("./sounds/crash.mp3");
                crash.play(); 
            break;
        case "l":
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play(); 
            break;
        default:
            break;
    }
}
function ButtonAnimation(eventKey){
    let ObjButton = document.querySelector("."+eventKey);

    ObjButton.classList.add("pressed");
    setTimeout(function(){
        ObjButton.classList.toggle("pressed");
    },101);


}
});
