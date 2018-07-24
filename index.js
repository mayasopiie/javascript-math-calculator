//---Initialization of math functions
//---Addition function
function add(x, y){
    return x + y;
}

//---Substraction function
function substract(x, y){
    return x - y;
}

//---Multiplication function
function multiple(x, y){
    return x * y;
}

//---Division function
function divide(x, y){
    return x / y;
}

//---Modulation function
function modulo(x, y){
    return x % y;
}


//---Initialization of input-output of calculator
const addForm = document.getElementById("add_form");
const addResult = document.getElementById("add_result");

const substractForm = document.getElementById("substract_form");
const substractResult = document.getElementById("substract_result");

const multiplicationForm = document.getElementById("multiplication_form");
const multiplicationResult = document.getElementById("multiplication_result");

const divideForm = document.getElementById("divide_form");
const divideResult = document.getElementById("divide_result");

const moduloForm = document.getElementById("modulo_form");
const moduloResult = document.getElementById("modulo_result");


//---Initialization of event listeners
addForm.addEventListener("submit", addDOM);
substractForm.addEventListener("submit", substractDOM);
multiplicationForm.addEventListener("submit", multipleDOM);
divideForm.addEventListener("submit", divideDOM);
moduloForm.addEventListener("submit", moduloDOM);


//---DOM functions for calculator
function addDOM(event){
    event.preventDefault();
    let addValue1 = Number(document.getElementById("add_value_1").value);
    let addValue2 = Number(document.getElementById("add_value_2").value);
    let resultAdd = add(addValue1, addValue2);
    addResult.value = resultAdd;
}

function substractDOM(event){
    event.preventDefault();
    let substractValue1 = Number(document.getElementById("substract_value_1").value);
    let substractValue2 = Number(document.getElementById("substract_value_2").value);
    let resultSubstract = substract(substractValue1, substractValue2);
    substractResult.value = resultSubstract;
}

function multipleDOM(event){
    event.preventDefault();
    let multiplicationValue1 = Number(document.getElementById("multiplication_value_1").value);
    let multiplicationValue2 = Number(document.getElementById("multiplication_value_2").value);
    let resultMultiple = multiple(multiplicationValue1, multiplicationValue2);
    multiplicationResult.value = resultMultiple;
}

function divideDOM(event){
    event.preventDefault();
    let divideValue1 = Number(document.getElementById("divide_value_1").value);
    let divideValue2 = Number(document.getElementById("divide_value_2").value);
    let resultDivide = divide(divideValue1, divideValue2);
    divideResult.value = resultDivide;
}

function moduloDOM(event){
    event.preventDefault();
    let moduloValue1 = Number(document.getElementById("modulo_value_1").value);
    let moduloValue2 = Number(document.getElementById("modulo_value_2").value);
    let resultModulo = modulo(moduloValue1, moduloValue2);
    moduloResult.value = resultModulo;
}