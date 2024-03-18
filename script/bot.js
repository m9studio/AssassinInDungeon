
/*ии ботов*/
function bot(){
if((layer1[py][px+1]>22)&&(layer1[py][px+1]<27)){layer1[py][px+1]=23;drawImage();playerhp();}
if((layer1[py][px-1]>22)&&(layer1[py][px-1]<27)){layer1[py][px-1]=25;drawImage();playerhp();}
if((layer1[py-1][px]>22)&&(layer1[py-1][px]<27)){layer1[py-1][px]=26;drawImage();playerhp();}
if((layer1[py+1][px]>22)&&(layer1[py+1][px]<27)){layer1[py+1][px]=24;drawImage();playerhp();}

if((layer1[py+1][px+1]>22)&&(layer1[py+1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=24}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=23}
drawImage();}

if((layer1[py-1][px-1]>22)&&(layer1[py-1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=26}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=25}
drawImage();}

if((layer1[py-1][px+1]>22)&&(layer1[py-1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=26}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=23}
drawImage();}

if((layer1[py+1][px-1]>22)&&(layer1[py+1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=24}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=25}
drawImage();}

if((layer1[py][px+2]>22)&&(layer1[py][px+2]<27)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=23;drawImage();}
if((layer1[py+2][px]>22)&&(layer1[py+2][px]<27)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=24;drawImage();}
if((layer1[py][px-2]>22)&&(layer1[py][px-2]<27)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=25;drawImage();}
if((layer1[py-2][px]>22)&&(layer1[py-2][px]<27)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=26;drawImage();}

}

function new_bot(){
botn++;
var x1; 
var y1;
var c1=ground.length;
var b1=ground[0].length;
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=26;drawImage();}
}
}

var timer=setInterval(function(){if(botn<0){new_bot()};bot()},500);
