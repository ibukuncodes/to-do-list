const inputBox = document.querySelector("#newtask input");
const btn = document.querySelector("#newtask button");
btn.onclick = function () {
    if (inputBox.value.length == 0){
        alert( "Enter an event");
    }
    else{
        document.querySelector("#tasks").innerHTML +=`
        <div class ="task"> 
            <p> ${inputBox.value} </p>
            <span class="delete"> \u00D7</span>
        </div>`;
    }
let x = document.querySelectorAll(".delete");
    for(var i=0; i<x.length; i++){
        x[i].onclick = function () {
            this.parentNode.remove();
        }
    };
let y = document.querySelectorAll(".task p");
    for(var i=0; i<y.length; i++){
        y[i].onclick = function (){
            this.classList.toggle("action");
        }
    };
    document.querySelector("#newtask input").value = "";
}

