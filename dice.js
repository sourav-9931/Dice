dice1();

function dice1()
{
    var x=(Math.random())*6;
x=Math.floor(x);

if(x===1){
    document.querySelector(".img1").setAttribute("src","images//1.png");
}
else if(x===2){
    document.querySelector(".img1").setAttribute("src","images//2.png");

}
else if(x===3){
    document.querySelector(".img1").setAttribute("src","images//3.png");

}
else if(x===4){
    document.querySelector(".img1").setAttribute("src","images//4.png");
}
else if(x===5){
    document.querySelector(".img1").setAttribute("src","images//5.png");
}
else{
    document.querySelector(".img1").setAttribute("src","images//6.png"); 
}



}


dice2();

function dice2()
{
    var x=(Math.random())*6;
x=Math.floor(x);

if(x===1){
    document.querySelector(".img2").setAttribute("src","images//1.png");
}
else if(x===2){
    document.querySelector(".img2").setAttribute("src","images//2.png");

}
else if(x===3){
    document.querySelector(".img2").setAttribute("src","images//3.png");

}
else if(x===4){
    document.querySelector(".img2").setAttribute("src","images//4.png");
}
else if(x===5){
    document.querySelector(".img2").setAttribute("src","images//5.png");
}
else{
    document.querySelector(".img2").setAttribute("src","images//6.png"); 
}



}






