//document.getElementById("count").innertext=5
let countEl= document.getElementById("count-el")

let count = 0

let saveEl= document.getElementById("save-el")



function increment() {
           count+=1
           countEl.innerText=count
           console.log(count)
}

function save(){
      let str=count + " " + "-"
      saveEl.innerText += str
}
 function reset(){
    count=0
    countEl.innerText=0
 }

/*
 let first="Y"
 let last="J"
 let fn= first + " " + last
 console.log(fn) */