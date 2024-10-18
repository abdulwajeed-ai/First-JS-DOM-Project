let bulb = document.querySelector(".bulb")
let button = document.querySelector(".btn")
let x = 0;
button.addEventListener("click", ()=>{
    if(x==0){
        button.innerHTML = "switch off"
        bulb.style.backgroundColor = "yellow"
        x=1;
         
    }else{
        button.innerHTML = "switch on"
        bulb.style.backgroundColor = "transparent"
        x=0;
    }

})