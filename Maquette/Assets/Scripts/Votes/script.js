let button_like = document.getElementById("like");
let button_dislike = document.getElementById("dislike");
let button_next = document.getElementById("next");

function clickbuttonLike() { 
    console.log("Button like click");
    console.log(button_like.value); 
}

function clickbuttonDislike() {  
    console.log("Button dislike click");
    console.log(button_dislike.value); 

    
}
function clickbuttonNext() {
    console.log("Button next click");
    console.log(button_next.value); 

}


function button_behavior(id){
    if (id == "like"){
        clickbuttonLike(); 
    }
    else if (id == "dislike"){
        clickbuttonDislike(); 
    }
    else if (id == "next"){
        clickbuttonNext(); 
    }

    let img = document.querySelector("#affiche"); 
    img.src = "img/pirates_caraibes.png";
}

