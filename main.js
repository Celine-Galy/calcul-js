const textInput = document.getElementById('text-input');
const errorTxt = document.getElementById('error');
const addOneButton = document.getElementById('add-one');
const minusOneButton = document.getElementById('minus-one');
const addTenButton = document.getElementById('add-ten');
const minusTenButton = document.getElementById('minus-ten');
const tableHistory = [];

addOneButton.addEventListener('click',(event)=>{ 
    changeNumber(1);
});
minusOneButton.addEventListener('click',(event)=>{
    console.log(event);
    changeNumber(-1);
});
addTenButton.addEventListener('click',(event)=>{
    console.log(event);
    changeNumber(10);
});
minusTenButton.addEventListener('click',(event)=>{
    console.log(event);
    changeNumber(-10);
});
function clickFunction(event){
    console.log(event);
}
function changeNumber(difference){
    let valueInteger = parseInt(textInput.value);

    
    if (Number.isInteger(valueInteger)){
        
        let newValue = valueInteger + difference;
        textInput.value = newValue;
        tableHistory.push(newValue);
        console.log(tableHistory);
        errorTxt.innerText ='';
    }
    else {
        errorTxt.innerText = "la valeur saisie n'est pas bonne";

    }
    
    console.log(valueInteger + difference);
}