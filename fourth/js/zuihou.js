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
    var box1 = document.getElementById("j-cntwrap");
    box1.style.marginLeft="-240";
}