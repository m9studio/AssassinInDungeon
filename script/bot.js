
/*ии ботов*/








function bot_ai(a1, a2){
//a1-номер скина 
//a2-номер бота
for(i=0;i<botx[a2].length;i++){
y=botx[a2][i][0];
x=botx[a2][i][1];
var a0=false;
if((x>0)&&((player_skin*15+194)<layer1[y][x-1])&&(layer1[y][x-1]<(player_skin*15+199))){
layer1[y][x]=8+a1*15; 
player_hp_none(a2)
a0=true;
}else
if((y>0)&&((player_skin*15+194)<layer1[y-1][x])&&(layer1[y-1][x]<(player_skin*15+199))){
layer1[y][x]=9+a1*15; 
player_hp_none(a2)
a0=true;
}else
if(((player_skin*15+194)<layer1[y][x+1])&&(layer1[y][x+1]<(player_skin*15+199))){
layer1[y][x]=10+a1*15; 
player_hp_none(a2)
a0=true;
}else
if(((player_skin*15+194)<layer1[y+1][x])&&(layer1[y+1][x]<(player_skin*15+199))){
layer1[y][x]=11+a1*15; 
player_hp_none(a2)
a0=true;
}else


if((x>1)&&((player_skin*15+194)<layer1[y][x-2])&&(layer1[y][x-2]<(player_skin*15+199))&&(layer1[y][x-1]==0)){
layer1[y][x]=0;
layer1[y][x-1]=8+a1*15;
botx[a2][i][1]=x-1;
layer2[y][x-1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x-1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if((y>1)&&((player_skin*15+194)<layer1[y-2][x])&&(layer1[y-2][x]<(player_skin*15+199))&&(layer1[y-1][x]==0)){
layer1[y][x]=0;
layer1[y-1][x]=9+a1*15;
botx[a2][i][0]=y-1;
layer2[y-1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y-1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(((player_skin*15+194)<layer1[y][x+2])&&(layer1[y][x+2]<(player_skin*15+199))&&(layer1[y][x+1]==0)){
layer1[y][x]=0;
layer1[y][x+1]=10+a1*15;
botx[a2][i][1]=x+1;
layer2[y][x+1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x+1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(((player_skin*15+194)<layer1[y+2][x])&&(layer1[y+2][x]<(player_skin*15+199))&&(layer1[y+1][x]==0)){
layer1[y][x]=0;
layer1[y+1][x]=11+a1*15;
botx[a2][i][0]=y+1;
layer2[y+1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y+1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(((player_skin*15+194)<layer1[y+1][x+1])&&(layer1[y+1][x+1]<(player_skin*15+199))){
if(layer1[y+1][x]==0){
layer1[y][x]=0;
layer1[y+1][x]=11+a1*15;
botx[a2][i][0]=y+1;
layer2[y+1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y+1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(layer1[y][x+1]==0){
layer1[y][x]=0;
layer1[y][x+1]=10+a1*15;
botx[a2][i][1]=x+1;
layer2[y][x+1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x+1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}else
if(((player_skin*15+194)<layer1[y-1][x-1])&&(layer1[y-1][x-1]<(player_skin*15+199))){
if(layer1[y-1][x]==0){
layer1[y][x]=0;
layer1[y-1][x]=9+a1*15;
botx[a2][i][0]=y-1;
layer2[y-1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y-1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(layer1[y][x-1]==0){
layer1[y][x]=0;
layer1[y][x-1]=8+a1*15;
botx[a2][i][1]=x-1;
layer2[y][x-1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x-1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}else
if(((player_skin*15+194)<layer1[y+1][x-1])&&(layer1[y+1][x-1]<(player_skin*15+199))){
if(layer1[y+1][x]==0){
layer1[y][x]=0;
layer1[y+1][x]=11+a1*15;
botx[a2][i][0]=y+1;
layer2[y+1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y+1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(layer1[y][x-1]==0){
layer1[y][x]=0;
layer1[y][x-1]=8+a1*15;
botx[a2][i][1]=x-1;
layer2[y][x-1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x-1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}else
if(((player_skin*15+194)<layer1[y-1][x+1])&&(layer1[y-1][x+1]<(player_skin*15+199))){
if(layer1[y-1][x]==0){
layer1[y][x]=0;
layer1[y-1][x]=9+a1*15;
botx[a2][i][0]=y-1;
layer2[y-1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y-1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}else
if(layer1[y][x+1]==0){
layer1[y][x]=0;
layer1[y][x+1]=10+a1*15;
botx[a2][i][1]=x+1;
layer2[y][x+1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x+1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}




if(a0==false){
b=Math.floor(Math.random() * (10 - 0 + 1)) + 0;
if(b==1){
if(layer1[y][x+1]==0){
layer1[y][x]=0;
layer1[y][x+1]=10+a1*15;
botx[a2][i][1]=x+1;
layer2[y][x+1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x+1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}
if(b==2){
if(layer1[y-1][x]==0){
layer1[y][x]=0;
layer1[y-1][x]=9+a1*15;
botx[a2][i][0]=y-1;
layer2[y-1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y-1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}
if(b==3){
if(layer1[y][x-1]==0){
layer1[y][x]=0;
layer1[y][x-1]=8+a1*15;
botx[a2][i][1]=x-1;
layer2[y][x-1]=layer2[y][x];
layer2[y][x]=0;
layer3[y][x-1]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}
if(b==4){
if(layer1[y+1][x]==0){
layer1[y][x]=0;
layer1[y+1][x]=11+a1*15;
botx[a2][i][0]=y+1;
layer2[y+1][x]=layer2[y][x];
layer2[y][x]=0;
layer3[y+1][x]=layer3[y][x];
layer3[y][x]=0;
a0=true;
}}}



} drawImage();}



function player_hp_none(a){
if(a==1){playerhp1();}
if(a==2){playerhp2();}
if(a==3){playerhp3();}
if(a==4){playerhp4();}
if(a==5){playerhp5();}
if(a==6){playerhp6();}
if(a==7){playerhp7();}
if(a==8){playerhp8();}
if(a==9){playerhp9();}
if(a==10){playerhp10();}
}

