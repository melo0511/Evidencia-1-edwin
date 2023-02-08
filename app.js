const n1 = document.getElementById("n1")
const n2 = document.getElementById("n2")
const n3 = document.getElementById("n3")

const recover = document.getElementById("recover")
const win = document.getElementById("win")
const honor = document.getElementById("honor")

const result = document.getElementById("result")
const resultEnd = document.getElementById("resultEnd")

const calculate = document.getElementById("calculate")
const clear = document.getElementById("clear")

calculate.addEventListener("click",()=>{

    if(n1.value <0 && n1.value>5 || n1.value === ""){
        result.textContent="Ingrese un numero mayor o igual a 0 y menor o igual a 5 en el campo 1"
        resultEnd.textContent = "⚠️"
    }else if(n2.value <0 && n2.value>5 || n2.value === ""){
        result.textContent="Ingrese un numero mayor o igual a 0 y menor o igual a 5 en el campo 2"
        resultEnd.textContent = "⚠️"
    }else if(n3.value <0 && n3.value>5 || n3.value === ""){
        result.textContent="Ingrese un numero mayor o igual a 0 y menor o igual a 5 en el campo 3"
        resultEnd.textContent = "⚠️"
    }else if(n1.value != "" && n2.value != "" && n3.value != ""){

        let note1 = Number(n1.value*0.3)
        let note2 = Number(n2.value*0.3)
        let note3 = Number(n3.value*0.4)

        let sum = (note1+note2+note3)

        result.textContent = "Promedio: "+sum.toFixed(2)

        if(sum<=2){
            resultEnd.textContent = "Perdio la materia"
        }else if(sum >2.1 && sum <3.4){
            resultEnd.textContent = "Pierde, pero puede recuperar"
        }else if(sum >3.5 && sum <4.5){
            resultEnd.textContent = "😉 Aprobó 👍"
        }else if(sum >4.6 && sum <=5){
            resultEnd.textContent = "🎉 Aprueba con honores 🥳"
        }

    }

})

function process(textField) {

    if(n1.value >=0 && n1.value <=5  && n2.value >=0 && n2.value <=5){

        let note1 = Number(n1.value*0.3)
        let note2 = Number(n2.value*0.3)

        let sum = (note1+note2)

        result.textContent = "Promedio: "+sum.toFixed(2)
        resultEnd.textContent = "Resultado Final: "

        recover.textContent = "Si, deseas recuperar necesitas: "+((2.1-sum)/0.4).toFixed(2)
        win.textContent = "Para ganar necesitas minimo: "+((3.5-sum)/0.4).toFixed(2)
        honor.textContent = "Para ganar con honores necesitarias minimo: "+((4.6-sum)/0.4).toFixed(2)

    }else if(n1.value <0 || n1.value >5  || n2.value <0 || n2.value>5){
        result.textContent='Ingrese un numero mayor o igual a 0 y menor o igual a 5 '+ textField
        resultEnd.textContent = "⚠️"
    }
}

n1.addEventListener('keyup',(event)=>{
    let textField = "en el campo 1"
    process(textField)
})

n2.addEventListener('keyup',(event)=>{
    let textField = "en el campo 2"
    process(textField)
})

clear.addEventListener("click",()=>{
    n1.value = ""
    n2.value = ""
    n3.value = ""
    recover.textContent = "Si, deseas recuperar necesitas: "
    win.textContent = "Para ganar necesitas minimo: "
    honor.textContent = "Para ganar con honores necesitarias minimo: "
    result.textContent = "Promedio:"
    resultEnd.textContent = "Resultado Final:"
})