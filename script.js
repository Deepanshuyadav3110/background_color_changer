const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// make a function to change the color with an event listner
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id==="red"){ // e.target tells about which of tag is target or from where the event come from
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="green"){ // e.target tells about which of tag is target or from where the event come from
            body.style.backgroundColor=e.target.id

        }
        if(e.target.id==="yellow"){ // e.target tells about which of tag is target or from where the event come from
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="purple"){ // e.target tells about which of tag is target or from where the event come from
            body.style.backgroundColor=e.target.id
        }
    })
})