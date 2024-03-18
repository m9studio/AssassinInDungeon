
/*ии ботов*/
function bot_0(){
if(layer1[py][px+1]==157){php-=5;newdata();}
if(layer1[py][px-1]==157){php-=5;newdata();}
if(layer1[py-1][px]==157){php-=5;newdata();}
if(layer1[py+1][px]==157){php-=5;newdata();}
}




function bot_1(){
if((layer1[py][px+1]>22)&&(layer1[py][px+1]<27)){layer1[py][px+1]=23;drawImage();playerhp1();}
if((layer1[py][px-1]>22)&&(layer1[py][px-1]<27)){layer1[py][px-1]=25;drawImage();playerhp1();}
if((layer1[py-1][px]>22)&&(layer1[py-1][px]<27)){layer1[py-1][px]=26;drawImage();playerhp1();}
if((layer1[py+1][px]>22)&&(layer1[py+1][px]<27)){layer1[py+1][px]=24;drawImage();playerhp1();}

if((layer1[py+1][px+1]>22)&&(layer1[py+1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=24; layer2[py][px+1]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py][px+1]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=23; layer2[py+1][px]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py+1][px]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}
drawImage();}

if((layer1[py-1][px-1]>22)&&(layer1[py-1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=26;layer2[py][px-1]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py][px-1]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=25;layer2[py-1][px]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py-1][px]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}
drawImage();}

if((layer1[py-1][px+1]>22)&&(layer1[py-1][px+1]<27)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=26;layer2[py][px+1]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py][px+1]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=23;layer2[py-1][px]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py-1][px]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}
drawImage();}

if((layer1[py+1][px-1]>22)&&(layer1[py+1][px-1]<27)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=24;layer2[py][px-1]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py][px-1]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=25;layer2[py+1][px]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py+1][px]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}
drawImage();}

if((layer1[py][px+2]>22)&&(layer1[py][px+2]<27)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=23; layer2[py][px+1]=layer2[py][px+2];layer2[py][px+2]=0; layer3[py][px+1]=layer3[py][px+2];layer3[py][px+2]=0;
drawImage();}
if((layer1[py+2][px]>22)&&(layer1[py+2][px]<27)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=24; layer2[py+1][px]=layer2[py+2][px];layer2[py+2][px]=0; layer3[py+1][px]=layer3[py+2][px];layer3[py+2][px]=0;
drawImage();}
if((layer1[py][px-2]>22)&&(layer1[py][px-2]<27)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=25; layer2[py][px-1]=layer2[py][px-2];layer2[py][px-2]=0; layer3[py][px-1]=layer3[py][px-2];layer3[py][px-2]=0;
drawImage();}
if(py>1){
if((layer1[py-2][px]>22)&&(layer1[py-2][px]<27)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=26; layer2[py-1][px]=layer2[py-2][px];layer2[py-2][px]=0; layer3[py-1][px]=layer3[py-2][px];layer3[py-2][px]=0;
drawImage();}}
}




function bot_2(){
if((layer1[py][px+1]>82)&&(layer1[py][px+1]<87)){layer1[py][px+1]=83;drawImage();playerhp2();}
if((layer1[py][px-1]>82)&&(layer1[py][px-1]<87)){layer1[py][px-1]=85;drawImage();playerhp2();}
if((layer1[py-1][px]>82)&&(layer1[py-1][px]<87)){layer1[py-1][px]=86;drawImage();playerhp2();}
if((layer1[py+1][px]>82)&&(layer1[py+1][px]<87)){layer1[py+1][px]=84;drawImage();playerhp2();}

if((layer1[py+1][px+1]>82)&&(layer1[py+1][px+1]<87)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=84;layer2[py][px+1]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py][px+1]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=83;layer2[py+1][px]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py+1][px]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}
drawImage();}

if((layer1[py-1][px-1]>82)&&(layer1[py-1][px-1]<87)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=86;layer2[py][px-1]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py][px-1]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=85;layer2[py-1][px]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py-1][px]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}
drawImage();}

if((layer1[py-1][px+1]>82)&&(layer1[py-1][px+1]<87)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=86;layer2[py][px+1]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py][px+1]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=83;layer2[py-1][px]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py-1][px]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}
drawImage();}

if((layer1[py+1][px-1]>82)&&(layer1[py+1][px-1]<87)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=84;layer2[py][px-1]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py][px-1]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=85;layer2[py+1][px]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py+1][px]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}
drawImage();}

if((layer1[py][px+2]>82)&&(layer1[py][px+2]<87)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=83;layer2[py][px+1]=layer2[py][px+2];layer2[py][px+2]=0; layer3[py][px+1]=layer3[py][px+2];layer3[py][px+2]=0;
drawImage();}
if((layer1[py+2][px]>82)&&(layer1[py+2][px]<87)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=84;layer2[py+1][px]=layer2[py+2][px];layer2[py+2][px]=0; layer3[py+1][px]=layer3[py+2][px];layer3[py+2][px]=0;
drawImage();}
if((layer1[py][px-2]>82)&&(layer1[py][px-2]<87)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=85;layer2[py][px-1]=layer2[py][px-2];layer2[py][px-2]=0; layer3[py][px-1]=layer3[py][px-2];layer3[py][px-2]=0;
drawImage();}
if(py>1){
if((layer1[py-2][px]>82)&&(layer1[py-2][px]<87)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=86;layer2[py-1][px]=layer2[py-2][px];layer2[py-2][px]=0; layer3[py-1][px]=layer3[py-2][px];layer3[py-2][px]=0;
drawImage();}}
}




function bot_3(){
if((layer1[py][px+1]>142)&&(layer1[py][px+1]<147)){layer1[py][px+1]=145;drawImage();playerhp3();}
if((layer1[py][px-1]>142)&&(layer1[py][px-1]<147)){layer1[py][px-1]=143;drawImage();playerhp3();}
if((layer1[py-1][px]>142)&&(layer1[py-1][px]<147)){layer1[py-1][px]=146;drawImage();playerhp3();}
if((layer1[py+1][px]>142)&&(layer1[py+1][px]<147)){layer1[py+1][px]=144;drawImage();playerhp3();}

if((layer1[py+1][px+1]>142)&&(layer1[py+1][px+1]<147)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=144;layer2[py][px+1]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py][px+1]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=145;layer2[py+1][px]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py+1][px]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}
drawImage();}

if((layer1[py-1][px-1]>142)&&(layer1[py-1][px-1]<147)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=146;layer2[py][px-1]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py][px-1]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=143;layer2[py-1][px]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py-1][px]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}
drawImage();}

if((layer1[py-1][px+1]>142)&&(layer1[py-1][px+1]<147)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=146;layer2[py][px+1]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py][px+1]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=145;layer2[py-1][px]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py-1][px]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}
drawImage();}

if((layer1[py+1][px-1]>142)&&(layer1[py+1][px-1]<147)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=144;layer2[py][px-1]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py][px-1]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=143;layer2[py+1][px]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py+1][px]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}
drawImage();}

if((layer1[py][px+2]>142)&&(layer1[py][px+2]<147)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=145;layer2[py][px+1]=layer2[py][px+2];layer2[py][px+2]=0; layer3[py][px+1]=layer3[py][px+2];layer3[py][px+2]=0;
drawImage();}
if((layer1[py+2][px]>142)&&(layer1[py+2][px]<147)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=144;layer2[py+1][px]=layer2[py+2][px];layer2[py+2][px]=0; layer3[py+1][px]=layer3[py+2][px];layer3[py+2][px]=0;
drawImage();}
if((layer1[py][px-2]>142)&&(layer1[py][px-2]<147)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=143;layer2[py][px-1]=layer2[py][px-2];layer2[py][px-2]=0; layer3[py][px-1]=layer3[py][px-2];layer3[py][px-2]=0;
drawImage();}
if(py>1){
if((layer1[py-2][px]>142)&&(layer1[py-2][px]<147)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=146;layer2[py-1][px]=layer2[py-2][px];layer2[py-2][px]=0; layer3[py-1][px]=layer3[py-2][px];layer3[py-2][px]=0;
drawImage();}}
}




function bot_4(){
if((layer1[py][px+1]>127)&&(layer1[py][px+1]<132)){layer1[py][px+1]=130;drawImage();playerhp3();}
if((layer1[py][px-1]>127)&&(layer1[py][px-1]<132)){layer1[py][px-1]=128;drawImage();playerhp3();}
if((layer1[py-1][px]>127)&&(layer1[py-1][px]<132)){layer1[py-1][px]=131;drawImage();playerhp3();}
if((layer1[py+1][px]>127)&&(layer1[py+1][px]<132)){layer1[py+1][px]=129;drawImage();playerhp3();}

if((layer1[py+1][px+1]>127)&&(layer1[py+1][px+1]<132)){
if(layer1[py][px+1]==0){layer1[py+1][px+1]=0;layer1[py][px+1]=129;layer2[py][px+1]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py][px+1]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px+1]=0;layer1[py+1][px]=130;layer2[py+1][px]=layer2[py+1][px+1];layer2[py+1][px+1]=0; layer3[py+1][px]=layer3[py+1][px+1];layer3[py+1][px+1]=0;}
drawImage();}

if((layer1[py-1][px-1]>127)&&(layer1[py-1][px-1]<132)){
if(layer1[py][px-1]==0){layer1[py-1][px-1]=0;layer1[py][px-1]=131;layer2[py][px-1]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py][px-1]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px-1]=0;layer1[py-1][px]=128;layer2[py-1][px]=layer2[py-1][px-1];layer2[py-1][px-1]=0; layer3[py-1][px]=layer3[py-1][px-1];layer3[py-1][px-1]=0;}
drawImage();}

if((layer1[py-1][px+1]>127)&&(layer1[py-1][px+1]<132)){
if(layer1[py][px+1]==0){layer1[py-1][px+1]=0;layer1[py][px+1]=131;layer2[py][px+1]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py][px+1]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}else
if(layer1[py-1][px]==0){layer1[py-1][px+1]=0;layer1[py-1][px]=130;layer2[py-1][px]=layer2[py-1][px+1];layer2[py-1][px+1]=0; layer3[py-1][px]=layer3[py-1][px+1];layer3[py-1][px+1]=0;}
drawImage();}

if((layer1[py+1][px-1]>127)&&(layer1[py+1][px-1]<132)){
if(layer1[py][px-1]==0){layer1[py+1][px-1]=0;layer1[py][px-1]=129;layer2[py][px-1]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py][px-1]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}else
if(layer1[py+1][px]==0){layer1[py+1][px-1]=0;layer1[py+1][px]=128;layer2[py+1][px]=layer2[py+1][px-1];layer2[py+1][px-1]=0; layer3[py+1][px]=layer3[py+1][px-1];layer3[py+1][px-1]=0;}
drawImage();}

if((layer1[py][px+2]>127)&&(layer1[py][px+2]<132)&&(layer1[py][px+1]==0)){layer1[py][px+2]=0;layer1[py][px+1]=130;layer2[py][px+1]=layer2[py][px+2];layer2[py][px+2]=0; layer3[py][px+1]=layer3[py][px+2];layer3[py][px+2]=0;
drawImage();}
if((layer1[py+2][px]>127)&&(layer1[py+2][px]<132)&&(layer1[py+1][px]==0)){layer1[py+2][px]=0;layer1[py+1][px]=129;layer2[py+1][px]=layer2[py+2][px];layer2[py+2][px]=0; layer3[py+1][px]=layer3[py+2][px];layer3[py+2][px]=0;
drawImage();}
if((layer1[py][px-2]>127)&&(layer1[py][px-2]<132)&&(layer1[py][px-1]==0)){layer1[py][px-2]=0;layer1[py][px-1]=128;layer2[py][px-1]=layer2[py][px-2];layer2[py][px-2]=0; layer3[py][px-1]=layer3[py][px-2];layer3[py][px-2]=0;
drawImage();}
if(py>1){
if((layer1[py-2][px]>127)&&(layer1[py-2][px]<132)&&(layer1[py-1][px]==0)){layer1[py-2][px]=0;layer1[py-1][px]=131;layer2[py-1][px]=layer2[py-2][px];layer2[py-2][px]=0; layer3[py-1][px]=layer3[py-2][px];layer3[py-2][px]=0;
drawImage();}}
}











































function new_bot1(){
botn1++;
var x1; 
var y1;
var c1;
var b1;
if(map_class=='war'){
c1=ground.length;
b1=ground[0].length;}
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=26;layer3[y1][x1]=layer2[y1][x1]=100;drawImage();}
}}

function new_bot2(){
botn2++;
var x1; 
var y1;
var c1;
var b1;
if(map_class=='war'){
c1=ground.length;
b1=ground[0].length;}
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=86;layer3[y1][x1]=layer2[y1][x1]=150;drawImage();}
}}

function new_bot3(){
botn3++;
var x1; 
var y1;
var c1;
var b1;
if(map_class=='normal_0'){
c1=ground.length;
b1=ground[0].length;}
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=146;layer3[y1][x1]=layer2[y1][x1]=50;drawImage();}
}}

function new_bot4(){
botn4++;
var x1; 
var y1;
var c1;
var b1;
if(map_class=='normal_0'){
c1=ground.length;
b1=ground[0].length;}
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=131;layer3[y1][x1]=layer2[y1][x1]=75;drawImage();}
}}
