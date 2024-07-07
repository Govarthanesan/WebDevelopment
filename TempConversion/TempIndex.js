const value1=document.getElementById("input");
const toFarenheit=document.getElementById("radio1");
const toCelsius=document.getElementById("radio2");
const res=document.getElementById("result");
let temp=0;

function Convert(){
    if(toFarenheit.checked){
        temp=Number(value1.value);
        temp=temp*9/5+32;
        res.textContent=temp.toFixed(1)+"F";
    }
    else if(toCelsius.checked){
        temp=Number(value1.value);
        temp=(temp-32)*(5/9);
        res.textContent=temp.toFixed(1)+"F";
    }
    else{
        res.textContent="Select a Unit";
    }
}