function clearScreen(){
    document.getElementById('inputArea').value = "";
}


function getVal(val){
    document.getElementById('inputArea').value += val;
}


function result(val){
    let var1 = document.getElementById('inputArea').value;
    let var2 = eval(var1);
    document.getElementById('inputArea').value = var2;   
}
function backSpace(){
    // string.replace('characterToReplace', '');
    var val = document.getElementById('inputArea').value;
    document.getElementById('inputArea').value = val.substr(0, val.length - 1);
}