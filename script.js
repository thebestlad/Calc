// display the values
function dis(val){
    document.querySelector("#ip").value+=val;
}
//clear
function clr(){
    document.querySelector('#ip').value="";
}
//solve
function solve(){
    var x=document.querySelector('#ip').value;
    var y=eval(x);
    document.querySelector('#ip').value=y;
}
//sqrt
function sqrt(){
    var x= document.querySelector('#ip').value;
    var y=Math.sqrt(x)
    document.querySelector('#ip').value=y
}
//delete a character
function del(){
var num=document.querySelector('#ip').value
var y=num.slice(0,-1)
document.querySelector('#ip').value=y
}