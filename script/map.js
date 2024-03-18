/*изменение массивов*/
var ground;
var layer1;
var layer2=[];
var layer3=[];
var py;
var px;
var dy;
var dx;
var botx=[];
var botn1;
var botn2;
var botn3;
var botn4;
var botn5;
var botn6;
var botn7;
var botn8;
var botn9;
var botn10;
var new_maps=true;
var map_object_animation=[];
new_map();

function new_map(z, x, y){
botn1=0;
botn2=0;
botn3=0;
botn4=0;
botn5=0;
botn6=0;
botn7=0;
botn8=0;
botn9=0;
botn10=0;

botx=[0,[],[],[],[],[],[],[],[],[],[]];











map_object_animation=[];
if(map_class=='peaceful'){
peaceful(1)
}else if(map_class=='peaceful_0'){
peaceful(2)
}else if(map_class=='normal_0'){
normal(0)
}else if(map_class=='normal_1'){
normal(1)
}else if(map_class=='normal_2'){
normal(2)
}else if(map_class=='normal_3'){
normal(3)
}else if(map_class=='normal_4'){
normal(4)
}else if(map_class=='quest_1-2'){
quest(1)
}else if(map_class=='quest_3-4'){
quest(2)
}else if((map_class=='war')&&(maplvl<lvl)){
if(maplvl==0){
war(0)
}else if(maplvl==1){
war(1)
}else if(maplvl==2){
war(2)
}else
{map_class='peaceful';new_maps=false;alert_on('новые карты ждите в обновлении')//new_map();
}}else if((map_class=='war')&&(maplvl>=lvl)){map_class='peaceful';new_maps=false;alert_on('вы не можете пройти дальше с вашим уровнем')}
if(z==true){px=x,py=y}


layer1[py][px]=199+(player_skin*15);

for(i=0;ground.length>i;i++){
for(i1=0;ground[i].length>i1;i1++){
ground[i][i1]--;
if((ground[i][i1]==104)||(ground[i][i1]==103)){map_object_animation[map_object_animation.length]=[i,i1];}
}}

var cc=layer1.length-1;
for(i=0;cc>i;i++){
for(i1=0;layer1[i].length>i1;i1++){
layer1[i][i1]--;
if((layer1[i][i1]==154)||(layer1[i][i1]==155)||(layer1[i][i1]==156)||(layer1[i][i1]==157)){map_object_animation[map_object_animation.length]=[i,i1];}
}}

for(i=0;cc>i;i++){
layer2[i]=[];layer3[i]=[];
for(i1=0;layer1[i].length>i1;i1++){

if(layer1[i][i1]==26){layer2[i][i1]=100;layer3[i][i1]=100;
botx[1][botx[1].length]=[i,i1];
}
if(layer1[i][i1]==86){layer2[i][i1]=150;layer3[i][i1]=150;
botx[2][botx[2].length]=[i,i1];
}
if(layer1[i][i1]==146){layer2[i][i1]=50;layer3[i][i1]=50;
botx[3][botx[3].length]=[i,i1];
}
if(layer1[i][i1]==131){layer2[i][i1]=75;layer3[i][i1]=75;
botx[4][botx[4].length]=[i,i1];
}

if(layer1[i][i1]==161){layer2[i][i1]=10000;layer3[i][i1]=10000;
botx[5][botx[5].length]=[i,i1];
}
if(layer1[i][i1]==176){layer2[i][i1]=25000;layer3[i][i1]=25000;
botx[6][botx[6].length]=[i,i1];
}
if(layer1[i][i1]==191){layer2[i][i1]=500000;layer3[i][i1]=500000;
botx[7][botx[7].length]=[i,i1];
}

if(layer1[i][i1]==71){layer2[i][i1]=1000;layer3[i][i1]=1000;
botx[8][botx[8].length]=[i,i1];
}
if(layer1[i][i1]==221){layer2[i][i1]=1500;layer3[i][i1]=1500;
botx[9][botx[9].length]=[i,i1];
}
if(layer1[i][i1]==206){layer2[i][i1]=10000;layer3[i][i1]=10000;
botx[10][botx[10].length]=[i,i1];
}




}}
if(new_maps==false){new_maps=true;new_map(true, 22, 17);}
}