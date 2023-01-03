let countEl= document.getElementById("count-el")
let count =0
let saveEl = document.getElementById("save-el")

function increment(){
    console.log('The Increment button is clicked')
    count=count+1
    countEl.innerText=count
}

function Decrement() {
    console.log("The Decrement button is clicked")
    if (count >0){
     count = count -1
    }else{
        console.log('Count is negative')
    }
    countEl.innerText=count
}

function Reset(){
    console.log("Reset button is clicked")
    countEl.innerText=0
}

function Save(){
   saveEl.textContent += count + " - "
   countEl.textContent = 0
   count=0
}