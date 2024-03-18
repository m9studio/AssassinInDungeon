
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



var animation1=1;
var animation2=1;


/*var player_time3=setInterval(function(){if((195+(player_skin*15))>layer1[py][px]){layer1[py][px]+=4;}
if(player_stop_run>0){player_stop_run--}if(player_stop_atack>0){player_stop_atack--}},1);*/


var timer=setInterval(function(){
animation1++;
if(botn1<0){new_bot1()};if(botn2<0){new_bot2()};

if(animation1%250==0){animation2++;
for(i=0;ground.length>i;i++){
for(i1=0;ground[i].length>i1;i1++){
if(ground[i][i1]==103){ground[i][i1]=104}else if(ground[i][i1]==104){ground[i][i1]=103}
if(animation2%2==0){if(layer1[i][i1]==154){layer1[i][i1]=155}else if(layer1[i][i1]==155){layer1[i][i1]=154}}
if(animation2%4==0){if(layer1[i][i1]==156){layer1[i][i1]=157}}
if(animation2%4==1){if(layer1[i][i1]==157){layer1[i][i1]=156}}
}}drawImage();}
if(animation1%150==0){bot_0();}
if(animation1%250==0){bot_1();}

if(player_stop_run>0){player_stop_run--}if(player_stop_atack>0){player_stop_atack--}

},1);
