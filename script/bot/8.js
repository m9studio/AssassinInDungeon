function new_bot8(){
botn8++;
var x1; 
var y1;
var c1;
var b1;
if(map_class!='peaceful'){
c1=ground.length;
b1=ground[0].length;}
var a1=false;
/*Math.floor(Math.random() * (max - min + 1)) + min;*/
while(a1==false){
y1=Math.floor(Math.random()*c1+0);
x1=Math.floor(Math.random()*b1+0);
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=71;layer3[y1][x1]=layer2[y1][x1]=1000;drawImage();
botx[8][botx[8].length]=[y1,x1];

}
}}






function playerhp8(){php-=Math.floor(1000/def);
layer2[y][x]+=Math.floor(((1000/100)*10)/def);
if(layer2[y][x]>layer3[y][x]){layer2[y][x]=layer3[y][x]}
newdata();}







function bothp8(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn8--;gold+=20;xp+=100;


var ic2;
for(ic1=0;ic1<botx[8].length;ic1++){if((botx[8][ic1][0]==y)&&(botx[8][ic1][1]==x)){ic2=ic1}}
botx[8].splice(ic2,1);


newdata();
door_map();}}