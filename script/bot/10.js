function new_bot10(){
botn10++;
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
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=206;layer3[y1][x1]=layer2[y1][x1]=10000;drawImage();
botx[10][botx[10].length]=[y1,x1];

}
}}






function playerhp10(){php-=Math.floor(2500/def);
layer2[y][x]+=Math.floor(((2500/100)*25)/def);
if(layer2[y][x]>layer3[y][x]){layer2[y][x]=layer3[y][x]}
newdata();}







function bothp10(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn10--;gold+=75;xp+=250;


var ic2;
for(ic1=0;ic1<botx[10].length;ic1++){if((botx[10][ic1][0]==y)&&(botx[10][ic1][1]==x)){ic2=ic1}}
botx[10].splice(ic2,1);


newdata();
door_map();}}