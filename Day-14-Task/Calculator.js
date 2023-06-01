var h1=document.createElement("h1");
h1.setAttribute("id","title");
h1.innerHTML='CALCULATOR';
h1.style.textAlign='center';

var para=document.createElement("p");
para.setAttribute("id","description");
para.innerHTML='DOM';
para.style.textAlign='center';



var fdiv=document.createElement("div");
fdiv.setAttribute("class","container");

var sdiv=document.createElement("div");
sdiv.setAttribute("class","calculator");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","result");
input.setAttribute("placeholder","0");

var aclear=document.createElement("button");
aclear.addEventListener("click",allclear);
aclear.setAttribute("id","clear");
aclear.innerHTML='C';

var bac =document.createElement("button");
bac.addEventListener("click",back);
bac.innerHTML='<-';


var point =createelement("button",".",'.');

var multiply =createelement("button","*",'3');

var seven =createelement("button","7",'7');
var eight =createelement("button","8",'8');
var nine =createelement("button","9",'9');
var divide =createelement("button","/",'/');
var four =createelement("button","4","4");
var five =createelement("button","5",'5');
var six =createelement("button","6",'6');
var minus =createelement("button","-","subtract");
var one =createelement("button","1",'1');
var two =createelement("button","2",'2');
var three =createelement("button","3",'3');
var addition =createelement("button","+","add");
var double0 =createelement("button","00",'00');
var zero =createelement("button","0",'0');

var calculater =document.createElement("button");
calculater.addEventListener("click",function(){calculate()});
calculater.setAttribute("class","equall");
calculater.setAttribute("id","equal");
calculater.innerHTML='=';

sdiv.appendChild(h1);
sdiv.appendChild(para);
sdiv.appendChild(input);
sdiv.appendChild(aclear) ;
sdiv.appendChild(bac) ;
sdiv.appendChild(point);
sdiv.appendChild(divide) ;
sdiv.appendChild(seven) ;
sdiv.appendChild(eight) ;
sdiv.appendChild(nine) ;
sdiv.appendChild(multiply) ;
sdiv.appendChild(four) ;
sdiv.appendChild(five) ;
sdiv.appendChild(six) ;
sdiv.appendChild(minus) ;
sdiv.appendChild(one) ;
sdiv.appendChild(two) ;
sdiv.appendChild(three) ;
sdiv.appendChild(addition); 
sdiv.appendChild(double0); 
sdiv.appendChild(zero);
sdiv.appendChild(calculater);

fdiv.append(sdiv);

document.body.append(fdiv);

function createelement(elename,value,row){
       var element=document.createElement(elename);
       element.innerHTML=value;
       element.setAttribute("type","button");
       element.setAttribute("id",row);
       element.addEventListener("click",function(){display(value)});
       return element;
}

function display(res){
   document.getElementById("result").value+=res;
}
function calculate(){
   try{
        
       var output=document.getElementById("result").value;

       var temp=eval(output);

       document.getElementById("result").value=temp
   }
   
   catch(err)
   {
       alert("Invalid Input")
   }
}
function allclear(){

       document.getElementById("result").value="";
}

function back(){

   var output=document.getElementById("result").value;
   document.getElementById("result").value=output.slice(0,-1)
}