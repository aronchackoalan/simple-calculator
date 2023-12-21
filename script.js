function display(val){
    document.getElementById("disp").value += val;
}

function solve(){
    let expr = document.getElementById("disp").value;
    document.getElementById("disp").value = eval(expr);
}

function clr(){
    document.getElementById("disp").value = "";
}