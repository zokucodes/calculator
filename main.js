const display = document.querySelector('.screen')
const equal = document.querySelector('#equal')
const buttonClear = document.getElementById('buttonClear')
const buttonDelete = document.getElementById('buttonDelete')
const numbers = document.querySelectorAll('[type="number"]')
const operators = document.querySelectorAll('[type="operator"]')

let numberA = ''
let numberB = ''
let operator = {
    text : "",
    operation : ""
}


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operate = (oper, a, b) => {

    let result = ""
    a = Number(a)
    b = Number(b)

    if (oper.operation == ''){
        return a
    }
    
    if (oper.operation == 'add'){
        result = add(a, b)
    }
    else if(oper.operation == 'div'){
        result = divide(a, b)
    }
    else if (oper.operation == 'mult'){
        result = multiply(a, b)
    }
    else if (oper.operation == 'sub'){
        result = subtract(a, b)
    }
  
    return Math.round(result * 1000)/1000
}

numbers.forEach(button=> button.addEventListener('click', numberShowDisplay))
operators.forEach(button=> button.addEventListener('click', operatorShowDisplay))
buttonDelete.addEventListener('click', deletePrevious)
buttonClear.addEventListener('click', clear)


function numberShowDisplay(e){
    if (operator.operation === '') {
      numberA = numberA + e.target.innerText
      display.classList.add('styleText')
      console.log(numberA)
      display.innerText = numberA
    } else {
      numberB = numberB + e.target.innerText
      display.innerText = display.innerText + e.target.innerText
      console.log(numberB)
    } 
}

function resultOperate(){
    result = operate(operator, numberA, numberB).toString()
    display.innerText = result
    numberA = result
    numberB = ""
}

function deletePrevious(){
    if (numberB != '') {
      numberB = numberB.slice(-(numberB.length), -1)
    } else {
      numberA = numberA.slice(-(numberA.length), -1)
      console.log(numberA)
    }
    display.innerText = display.innerHTML.slice(-(display.innerText.length), -1)
  }

function clear(){
    operator.operation = ''
    display.innerText = ''
    numberA = ''
    numberB = ''
}

function operatorShowDisplay(e){
     if(display.innerHTML.charAt(display.innerHTML.length - 1) == ('+' || '-' || '*' || '/') && e.target.innerText == ('+' || '-' || '*' || '/')){
        return
    }
    if (numberB == "" && e.target.id != 'equal'){
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        return
    }
    if (e.target.id == 'equal'){
        resultOperate()
        operator.operation = ""
        return
    }
    if (!(numberB == "") && e.target.id != 'equal'){
        resultOperate()
        operator.text = e.target.innerHTML
        operator.operation = e.target.id
        display.innerHTML += e.target.innerText
        console.log(numberA)
    }
}






