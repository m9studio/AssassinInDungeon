function new_bot5(){
botn5++;
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
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=161;layer3[y1][x1]=layer2[y1][x1]=10000;drawImage();
botx[5][botx[5].length]=[y1,x1];

}
}}






function playerhp5(){php-=Math.floor(1000/def);newdata();}







function bothp5(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn5--;gold+=500;xp+=1250;


var ic2;
for(ic1=0;ic1<botx[5].length;ic1++){if((botx[5][ic1][0]==y)&&(botx[5][ic1][1]==x)){ic2=ic1}}
botx[5].splice(ic2,1);


newdata();
door_map();}}