var div_Container = document.createElement ('div') ;
div_Container.setAttribute("id", "container")
document.body.append(div_Container)

var div_calculator = document.createElement ('div') ;
div_calculator.setAttribute("id", "calculator");
div_Container.appendChild(div_calculator);

var div_Result = document.createElement ('div') ;
div_Result.setAttribute("id", "result");
div_calculator.appendChild(div_Result);

var div_history = document.createElement('div');
div_history.setAttribute("id", "history");
div_Result.appendChild(div_history);

var para_history = document.createElement('p');
para_history.setAttribute("id", "history-value");
div_history.appendChild(para_history);


var div_Output = document.createElement('div');
div_Output.setAttribute("id","output");
div_Result.appendChild(div_Output);

var Out_value = document.createElement('p');
Out_value.setAttribute("id","output-value");
div_Output.appendChild(Out_value);

var div_Instruct = document.createElement ('div') ;
div_Instruct.setAttribute("id", "inst");
div_calculator.appendChild(div_Instruct);
div_Instruct.innerText="TYPE THE NUMBERS TO CALCULATE"


var div_Keyboard = document.createElement('div')
div_Keyboard.setAttribute("id", "keyboard");
div_calculator.appendChild(div_Keyboard);


var clear = document.createElement('button')
clear.setAttribute('id', 'clear')
clear.setAttribute('class', 'operator')
var text1 = document.createTextNode("C"); 
div_Keyboard.appendChild(clear);
clear.appendChild(text1)

var backspace = document.createElement('button')
backspace.setAttribute('id', 'backspace')
backspace.setAttribute('class', 'operator')
var text2 = document.createTextNode("CE"); 
div_Keyboard.appendChild(backspace);
backspace.appendChild(text2)

var percent = document.createElement('button')
percent.setAttribute('id', '%')
percent.setAttribute('class', 'operator')
var text3 = document.createTextNode("%"); 
div_Keyboard.appendChild(percent);
percent.appendChild(text3)


var divide = document.createElement('button')
divide.setAttribute('id', '/')
divide.setAttribute('class', 'operator')
var text4 = document.createTextNode("/");
div_Keyboard.appendChild(divide); 
divide.appendChild(text4)


var mul = document.createElement('button')
mul.setAttribute('id', '*')
mul.setAttribute('class', 'operator')
var text5 = document.createTextNode('X');
div_Keyboard.appendChild(mul); 
mul.appendChild(text5)


var add = document.createElement('button')
add.setAttribute('id', "+")
add.setAttribute('class', 'operator')
var text6 = document.createTextNode("+");
div_Keyboard.appendChild(add); 
add.appendChild(text6)


var subtr = document.createElement('button')
subtr.setAttribute('id', "-")
subtr.setAttribute('class', 'operator')
var text18 = document.createTextNode("-");
div_Keyboard.appendChild(subtr); 
subtr.appendChild(text18)



var equal = document.createElement('button')
equal.setAttribute('id', '=')
equal.setAttribute('class', 'operator')
var text7 = document.createTextNode("=");
div_Keyboard.appendChild(equal); 
equal.appendChild(text7)

var one = document.createElement('button')
one.setAttribute('id', '1')
one.setAttribute('class', 'number')
var text8 = document.createTextNode("1");
div_Keyboard.appendChild(one); 
one.appendChild(text8)

var two = document.createElement('button')
two.setAttribute('id', '2')
two.setAttribute('class', 'number')
var text9 = document.createTextNode("2");
div_Keyboard.appendChild(two); 
two.appendChild(text9)


var three = document.createElement('button')
three.setAttribute('id', '3')
three.setAttribute('class', 'number')
var text10 = document.createTextNode("3");
div_Keyboard.appendChild(three); 
three.appendChild(text10)


var Four = document.createElement('button')
Four.setAttribute('id', '4')
Four.setAttribute('class', 'number')
var text11 = document.createTextNode("4");
div_Keyboard.appendChild(Four); 
Four.appendChild(text11)


var Five = document.createElement('button')
Five.setAttribute('id', '5')
Five.setAttribute('class', 'number')
var text12 = document.createTextNode("5");
div_Keyboard.appendChild(Five); 
Five.appendChild(text12)


var Six = document.createElement('button')
Six.setAttribute('id', '6')
Six.setAttribute('class', 'number')
var text13 = document.createTextNode("6");
div_Keyboard.appendChild(Six); 
Six.appendChild(text13)


var seven = document.createElement('button')
seven.setAttribute('id', '7')
seven.setAttribute('class', 'number')
var text14 = document.createTextNode("7");
div_Keyboard.appendChild(seven); 
seven.appendChild(text14)

var eight = document.createElement('button')
eight.setAttribute('id', '8')
eight.setAttribute('class', 'number')
var text15 = document.createTextNode("8");
div_Keyboard.appendChild(eight); 
eight.appendChild(text15)


var nine = document.createElement('button')
nine.setAttribute('id', '9')
nine.setAttribute('class', 'number')
var text16 = document.createTextNode("9");
div_Keyboard.appendChild(nine); 
nine.appendChild(text16)


var zero = document.createElement('button')
zero.setAttribute('id', '0')
zero.setAttribute('class', 'number')
var text17 = document.createTextNode("0");
div_Keyboard.appendChild(zero); 
zero.appendChild(text17)

var point = document.createElement('button')
point.setAttribute('id', '.')
point.setAttribute('class', 'number')
var text18 = document.createTextNode(".");
div_Keyboard.appendChild(point); 
point.appendChild(text18)


document.onkeydown = function(e){
            console.log(e)

}
   
// for keypad




document.onkeydown = function(e){
           if(e.key!='1'&&e.key!='2'&&e.key!='3'&&e.key!='4'&&e.key!='5'&&e.key!='6'&&e.key!='7'&&e.key!='8'&&e.key!='9'&&e.key!='0'&&e.key!='.'&&e.key!='/'&&e.key!='*'&&e.key!='-'&&e.key!='+'){
              alert('Only numbers are allowed') ;
           }
           else if(e.key == 1) {
        event.preventDefault();
        document.getElementById("1").click();
        
    }
    else if(e.key == 2) {
        event.preventDefault();
        document.getElementById("2").click();
    }
    else if(e.key == 3) {
        event.preventDefault();
        document.getElementById("3").click();
    }

    else if(e.key == 4) {
        event.preventDefault();
        document.getElementById("4").click();
    }
      else if(e.key == 5) {
        event.preventDefault();
        document.getElementById("5").click();
    }
    else if(e.key == 6) {
        event.preventDefault();
        document.getElementById("6").click();
    }   
    else if(e.key == 7) {
        event.preventDefault();
        document.getElementById("7").click();
    } 
    else if(e.key == 8) {
        event.preventDefault();
        document.getElementById("8").click();
    }
    else if(e.key == 9) {
        event.preventDefault();
        document.getElementById("9").click();
    }
    else if(e.key == 0) {
        event.preventDefault();
        document.getElementById("0").click();
    }
     else if(e.key == '.') {
        event.preventDefault();
        document.getElementById(".").click();
    }
            

        }

function gethistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}

function printoutput(num){
    document.getElementById("output-value").innerText=num;
}

var operator = document.getElementsByClassName("operator");

for(var i=0; i<operator.length;i++){
    operator[i].addEventListener('click',function(){

       // for clear
if(this.id=="clear"){
 printHistory("");
    printoutput("");
}
//for backspace
else if(this.id=="backspace"){

if(output!=''){
    var output=getoutput();
    output=output.substr(0,output.length-1);
    printoutput(output);
}
}
//for the operators
else{
    var output=getoutput();
var history =gethistory();

if(output!=""){
    history=history+output;
    if(this.id=='='){
        var result=eval(history);
        printoutput(result);
        printHistory('');
    }

    else{
        history=history+this.id;
        printHistory(history);
        printoutput('');
    }
}


}


    })
}


var number = document.getElementsByClassName("number");

for(var i=0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getoutput();

        if(output!=NaN&&output.length<10 ){
            output=output+this.id;
            printoutput(output);
        }
        else{
            alert("Maximum 10 digits allowed.")
        }
    })
}