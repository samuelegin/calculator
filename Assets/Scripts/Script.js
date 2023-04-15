let screen = document.getElementById("screen")
let btns = document.getElementsByClassName("btn")
let clear = document.getElementById("clear")
let equal = document.getElementById("equals")
let backspace = document.getElementById("back-space")

for (let btn =0; btn < btns.length; btn++){
  btns[btn].addEventListener("click", ()=>{
    screen.innerHTML += btns[btn].innerHTML
  })
}

clear.addEventListener("click", ()=>{
    if(screen.innerHTML == ""){
       alert("nothing to clear")
    }else{
        screen.innerHTML =""
    }
})

equal.addEventListener("click",()=>{
    if(screen.innerHTML == ""){
        alert("Please enter some value")
     }else{
        let answer = eval(screen.innerHTML)
        screen.innerHTML = answer
    }
})

backspace.addEventListener("click", ()=>{
    let lastEntry = screen.innerHTML;
    let deleteLastEntry = Number(lastEntry.toString().slice(0, -1))
    screen.innerHTML = deleteLastEntry
})
