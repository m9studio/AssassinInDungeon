function new_bot9(){
botn9++;
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
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=221;layer3[y1][x1]=layer2[y1][x1]=1500;drawImage();
botx[9][botx[9].length]=[y1,x1];

}
}}






function playerhp9(){php-=Math.floor(1250/def);
layer2[y][x]+=Math.floor(((1250/100)*15)/def);
if(layer2[y][x]>layer3[y][x]){layer2[y][x]=layer3[y][x]}
newdata();}







function bothp9(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn9--;gold+=25;xp+=125;


var ic2;
for(ic1=0;ic1<botx[9].length;ic1++){if((botx[9][ic1][0]==y)&&(botx[9][ic1][1]==x)){ic2=ic1}}
botx[9].splice(ic2,1);


newdata();
door_map();}}