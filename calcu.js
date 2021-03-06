function getHistory() {
   return document.getElementById("his-val").innerText;
}
function printHistory(number) {
    document.getElementById("his-val").innerText=number;
}
//printHistory("56")
function getOutput() {
    return document.getElementById("out-val").innerText;
}
function printOutput(number) {
    if(number==""){
        document.getElementById("out-val").innerText=number;
    }
   // printOutput("5566")
    else{
    document.getElementById("out-val").innerText=getFormattedNumber(number);
}
}
function getFormattedNumber(number) {
    if(number=="-"){
        return "";
    }
    var n=Number(number);
    var value=n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(number) {
    return Number(number.replace(/,/g,''));
}
var operator=document.getElementsByClassName("op");
for(var i =0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output= output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                output=output==""?
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
});
}
var number=document.getElementsByClassName("num");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
 });
    }
