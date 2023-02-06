const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")

const win = document.getElementById("win")
const lost = document.getElementById("lost")
const honor = document.getElementById("honor")

const result = document.getElementById("result")
const resultEnd = document.getElementById("resultEnd")

const calculate = document.getElementById("calculate")

calculate.addEventListener("click",start)

function start() {

    if(n1.value <0 || n1.value>5){
        result.textContent="Ingrese un numero mayor a 0 y menor a 5"
    }else if(n2.value <0 || n2.value>5){
        result.textContent="Ingrese un numero mayor a 0 y menor a 5"
    }else if(n3.value <0 || n3.value>5){
        result.textContent="Ingrese un numero mayor a 0 y menor a 5"
    }

    let note1 = Number(n1.value*0.3)
    let note2 = Number(n2.value*0.3)
    let note3 = Number(n3.value*0.4)

    let prom = (note1+note2+note3)

    result.textContent = prom

    if(prom<=2){
        resultEnd.textContent = "Perdio"
    }else if(prom >2.1 && prom <3.4){
        resultEnd.textContent = "Pierde, pero puede recuperar"
    }else if(prom >3.5 && prom <4.5){
        resultEnd.textContent = "Aprobó"
    }else if(prom >4.6 && prom <=5){
        resultEnd.textContent = "Aprueba con honores"
    }

}

window.addEventListener("load",()=>{
    setInterval(() => {
        if(n2.value != ""){

            let note1 = Number(n1.value*0.3)
            let note2 = Number(n2.value*0.3)

            
            
        }
    }, 500);
})