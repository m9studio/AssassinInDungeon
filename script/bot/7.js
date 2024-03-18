function new_bot7(){
botn7++;
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
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=191;layer3[y1][x1]=layer2[y1][x1]=500000;drawImage();
botx[7][botx[7].length]=[y1,x1];

}
}}






function playerhp7(){php-=Math.floor(10000/def);newdata();}







function bothp7(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn5--;gold+=5000;xp+=15000;


var ic2;
for(ic1=0;ic1<botx[7].length;ic1++){if((botx[7][ic1][0]==y)&&(botx[7][ic1][1]==x)){ic2=ic1}}
botx[7].splice(ic2,1);


newdata();
door_map();}}