function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

const addForm = document.getElementById("add_form");
const addResult = document.getElementById("add_result");

const substractForm = document.getElementById("substract_form");
const substractResult = document.getElementById("substract_result");

addForm.addEventListener("submit", addDOM);
substractForm.addEventListener("submit", substractDOM);

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