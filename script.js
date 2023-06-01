window.addEventListener("load",codigo)

var btn;
var ecuacion="";

function codigo(){
    let botones = document.querySelectorAll(".boton")

    botones.forEach(function(boton){
        boton.addEventListener("click",function(){
            btn = boton.textContent.trim()
            console.log(btn)
            if(isNaN(btn)){
                simbolo()
            }else{
                numero()
            }
        })
    })
}

function simbolo(){
    if(ecuacion==""){

        if(btn == "."){
        
        }else if(btn == "−"){

        }else{
            return
        }
    }else{
        let arrEcuacion = ecuacion.split("");
        let arrLargo = arrEcuacion.length
        if(isNaN(arrEcuacion[arrLargo-1])){
            if(arrEcuacion[arrLargo-1] != "." && btn == "." || btn=="←"){

            }else{
                return
            }
        }
    }

    switch(btn){
        case "+":
            ecuacion += btn;
        break;
        case "−":
            ecuacion += "-"
        break;
        case "×":
            ecuacion += "*"
        break;
        case "÷":
            ecuacion += "/"
        break;
        case "←":
            let arrEcuacion = ecuacion.split("");
            console.log(arrEcuacion)
            arrEcuacion.pop("");
            ecuacion = arrEcuacion.join("");
        break;
        case "=":
            ecuacion = eval(ecuacion)
            ecuacion = ecuacion.toString()
        break;
        case ".":
            ecuacion += "."
        break;
        case "C":
            location.reload()
    }
    actualizarPantalla()
}

function numero(){
    ecuacion += btn
    actualizarPantalla()
}

function actualizarPantalla(){
    let pantalla = document.querySelector(".pantalla")
    if(ecuacion == ""){
        pantalla.value = "0"
    }else{
        pantalla.value = ecuacion
    }
}