
/*ии ботов*/
function bot(){
if((layer1[py][px+1]>22)&&(layer1[py][px+1]<27)){layer1[py][px+1]=23;drawImage();playerhp1();}
if((layer1[py][px-1]>22)&&(layer1[py][px-1]<27)){layer1[py][px-1]=25;drawImage();playerhp1();}
if((layer1[py-1][px]>22)&&(layer1[py-1][px]<27)){layer1[py-1][px]=26;drawImage();playerhp1();}
if((layer1[py+1][px]>22)&&(layer1[py+1][px]<27)){layer1[py+1][px]=24;drawImage();playerhp1();}

if((layer1[py+1][px+1]>22)&&(layer1[py+1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=24;layer2[py][px+1]=layer2[py+1][px+1];}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=23;layer2[py+1][px]=layer2[py+1][px+1];}
drawImage();}

if((layer1[py-1][px-1]>22)&&(layer1[py-1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=26;layer2[py][px-1]=layer2[py-1][px-1];}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=25;layer2[py-1][px]=layer2[py-1][px-1];}
drawImage();}

if((layer1[py-1][px+1]>22)&&(layer1[py-1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=26;layer2[py][px+1]=layer2[py-1][px+1];}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=23;layer2[py-1][px]=layer2[py-1][px+1];}
drawImage();}

if((layer1[py+1][px-1]>22)&&(layer1[py+1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=24;layer2[py][px-1]=layer2[py+1][px-1];}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=25;layer2[py+1][px]=layer2[py+1][px-1];}
drawImage();}

if((layer1[py][px+2]>22)&&(layer1[py][px+2]<27)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=23;layer2[py][px+1]=layer2[py][px+2];
drawImage();}
if((layer1[py+2][px]>22)&&(layer1[py+2][px]<27)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=24;layer2[py+1][px]=layer2[py+2][px];
drawImage();}
if((layer1[py][px-2]>22)&&(layer1[py][px-2]<27)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=25;layer2[py][px-1]=layer2[py][px-2];
drawImage();}
if(py>1){
if((layer1[py-2][px]>22)&&(layer1[py-2][px]<27)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=26;layer2[py-1][px]=layer2[py-2][px];
drawImage();}}




if((layer1[py][px+1]>82)&&(layer1[py][px+1]<87)){layer1[py][px+1]=83;drawImage();playerhp2();}
if((layer1[py][px-1]>82)&&(layer1[py][px-1]<87)){layer1[py][px-1]=85;drawImage();playerhp2();}
if((layer1[py-1][px]>82)&&(layer1[py-1][px]<87)){layer1[py-1][px]=86;drawImage();playerhp2();}
if((layer1[py+1][px]>82)&&(layer1[py+1][px]<87)){layer1[py+1][px]=84;drawImage();playerhp2();}

if((layer1[py+1][px+1]>82)&&(layer1[py+1][px+1]<87)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=84;layer2[py][px+1]=layer2[py+1][px+1];}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=83;layer2[py+1][px]=layer2[py+1][px+1];}
drawImage();}

if((layer1[py-1][px-1]>82)&&(layer1[py-1][px-1]<87)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=86;layer2[py][px-1]=layer2[py-1][px-1];}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=85;layer2[py-1][px]=layer2[py-1][px-1];}
drawImage();}

if((layer1[py-1][px+1]>82)&&(layer1[py-1][px+1]<87)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=86;layer2[py][px+1]=layer2[py-1][px+1];}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=83;layer2[py-1][px]=layer2[py-1][px+1];}
drawImage();}

if((layer1[py+1][px-1]>82)&&(layer1[py+1][px-1]<87)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=84;layer2[py][px-1]=layer2[py+1][px-1];}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=85;layer2[py+1][px]=layer2[py+1][px-1];}
drawImage();}

if((layer1[py][px+2]>82)&&(layer1[py][px+2]<87)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=83;layer2[py][px+1]=layer2[py][px+2];
drawImage();}
if((layer1[py+2][px]>82)&&(layer1[py+2][px]<87)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=84;layer2[py+1][px]=layer2[py+2][px];
drawImage();}
if((layer1[py][px-2]>82)&&(layer1[py][px-2]<87)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=85;layer2[py][px-1]=layer2[py][px-2];
drawImage();}
if(py>1){
if((layer1[py-2][px]>82)&&(layer1[py-2][px]<87)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=86;layer2[py-1][px]=layer2[py-2][px];
drawImage();}}
}

function new_bot1(){
botn1++;
var x1; 
var y1;
var c1=ground.length;
var b1=ground[0].length;
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=26;layer2[y1][x1]=100;drawImage();}
}}

function new_bot2(){
botn2++;
var x1; 
var y1;
var c1=ground.length;
var b1=ground[0].length;
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=86;layer2[y1][x1]=150;drawImage();}
}}

var timer=setInterval(function(){if(botn1<0){new_bot1()};if(botn2<0){new_bot2()};bot()},500);
