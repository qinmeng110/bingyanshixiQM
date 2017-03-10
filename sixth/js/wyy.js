/**
 * Created by pc on 2017/3/8.
 */
function show(){
    var menu = document.getElementById("face-menu");
    menu.style.display="block";
}
function hidde(){
    var menu = document.getElementById("face-menu");
    menu.style.display="none";
}
function chuxian(i){
    var menu = document.getElementsByClassName("f-cb")[i+1];
    menu.style.display="block";
}
function xiaoshi(i){
    var menu = document.getElementsByClassName("f-cb")[i+1];
    menu.style.display="none";
}
function zuoyi(){
    var box = document.getElementById("j-cntlist");
    var list = box.getElementsByClassName("box11");
    var baseWidth = list[0].offsetWidth;
    box.style.left = baseWidth + "px";
}
function chuxian0(){
    var box = document.getElementById("hezi1");
    box.style.display="block";
}
function xiaoshi0(){
    var box = document.getElementById("hezi1");
    box.style.display="none";
}
function chuxian1(){
    var box = document.getElementById("hezi2");
    box.style.display="block";
}
function xiaoshi1(){
    var box = document.getElementById("hezi2");
    box.style.display="none";
}
function chuxian2(){
    var box = document.getElementById("hezi3");
    box.style.display="block";
}
function xiaoshi2(){
    var box = document.getElementById("hezi3");
    box.style.display="none";
}
function chuxian3(){
    var box = document.getElementById("hezi4");
    box.style.display="block";
}
function xiaoshi3(){
    var box = document.getElementById("hezi4");
    box.style.display="none";
}
function chuxian4(){
    var box = document.getElementById("hezi5");
    box.style.display="block";
}
function xiaoshi4(){
    var box = document.getElementById("hezi5");
    box.style.display="none";
}
function chuxian5(){
    var box = document.getElementById("hezi6");
    box.style.display="block";
}
function xiaoshi5(){
    var box = document.getElementById("hezi6");
    box.style.display="none";
}