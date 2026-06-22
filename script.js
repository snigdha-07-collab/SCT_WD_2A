const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        let expression = display.value;
        let result = eval(expression);

        const li = document.createElement("li");
        li.textContent = `${expression} = ${result}`;
        historyList.prepend(li);

        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function sqrt(){
    try{
        display.value = Math.sqrt(eval(display.value));
    }
    catch{
        display.value = "Error";
    }
}

function square(){
    try{
        let value = eval(display.value);
        display.value = value * value;
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",(e)=>{

    if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
        display.value += e.key;
    }

    if(e.key==="Enter"){
        calculate();
    }

    if(e.key==="Backspace"){
        deleteLast();
    }

    if(e.key==="Escape"){
        clearDisplay();
    }
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light");

    themeBtn.textContent =
    document.body.classList.contains("light")
    ? "☀️"
    : "🌙";
});