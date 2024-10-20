let opt=""
let num="";
let num1
let num2
function display(a){
a.toString()
num=num+a;
document.getElementById("text").value = num
}
function AC(){
    document.getElementById("text").value=""
    num=""
}
function Clr(){
    value=document.getElementById("text").value
    console.log(value)
    len=value.length
    len=len-1
    value=value.slice(0,len)  
    document.getElementById("text").value = value
    num=value
}
function clear(){
    document.getElementById("text").value = ""
}
function oparator(op){
    opt=op
    num1=num
    num1=parseFloat(num1)
    document.getElementById("text").value=""
    num=""
}
function eql(){
    num2=num
    num2=parseFloat(num2)
    if(opt==1)
        {ans=num1+num2}
    if(opt==2)
        {ans=num1-num2}
    if(opt==3)
        {ans=num1*num2}
    if(opt==4)
        {ans=num1/num2}
    document.getElementById("text").value=ans
    num=""
    }
function sin(){
    num="sin("
    document.getElementById("text").value=num
    
}
