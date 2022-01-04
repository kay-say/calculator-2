const pads=document.querySelectorAll(".pad")
const display=document.querySelector(".display")
const ac=document.querySelector(".ac")
let num1=0
let num2=0
let op=""

pads.forEach(pad=>{
    pad.addEventListener("click",(e)=>{
        // console.log(e.target.classList)
        const target=e.target
        const list=e.target.classList
        if(list.contains("number")){
            if(display.textContent==0){
                display.textContent=target.textContent
            }else{
                display.textContent += target.textContent
            }
            !op? num1=parseFloat(display.textContent) : num2=parseFloat(display.textContent)
            console.log(num1, typeof num1, num2, typeof num2)
            // console.log(num2, typeof num2)
        }
        if(list.contains("op")){
            display.textContent=0
            if(list.contains("minus"))op="minus"
            if(list.contains("plus"))op="plus"
            if(list.contains("divide"))op="divide"
            if(list.contains("multiply"))op="multiply"
            console.log(op)
        }
        if(list.contains("equal")){
            if(op=="minus")display.textContent=num1-num2
            if(op=="plus")display.textContent=num1+num2
            if(op=="divide")display.textContent=num1/num2
            if(op=="multiply")display.textContent=num1*num2
            num1=0
            num2=0
            op=""
            // display.textContent=0
        }
        
    })
    
    
})

ac.addEventListener("click",()=>{
    display.textContent=0
})