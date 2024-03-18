function new_bot4(){
botn4++;
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
if(layer1[y1][x1]==0){a1=true;layer1[y1][x1]=131;layer3[y1][x1]=layer2[y1][x1]=75;drawImage();
botx[4][botx[4].length]=[y1,x1];

}
}}






function playerhp4(){php-=Math.floor(150/def);newdata();}







function bothp4(y,x){layer2[y][x]-=atk;drawImage();
if(layer2[y][x]<1){layer2[y][x]=0;layer3[y][x]=0;
layer1[y][x]=0;drawImage();botn4--;gold++;xp+=1;


var ic2;
for(ic1=0;ic1<botx[4].length;ic1++){if((botx[4][ic1][0]==y)&&(botx[4][ic1][1]==x)){ic2=ic1}}
botx[4].splice(ic2,1);


i=Math.floor(Math.random() * (100 - 1 + 1)) + 1;

if((10<i)&&(i<41)){
ii=Math.floor(Math.random() * (2 - 1 + 1)) + 1;
ii=ii*10;ii=191+ii;
i0=0;
i1=true;
for(i2=0;i2<item_slot3.length;i2++){
if(item_slot3[i2][0]==ii){i0=i2;i1=false}
}
if(i1==true){item_slot3[item_slot3.length]=[ii,1]}
if(i1==false){item_slot3[i0][1]++}
}


newdata();
door_map();}}