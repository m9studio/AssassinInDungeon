function shop_on(){
shop_div.style.display='block';
main.style.display='none';
shoping=true;
sellx=[];
buyx=null;
new_shop();
buy.innerHTML='стоимость: ';
sell.innerHTML='вещь: <br>стоимость: ';
}

function shop_off(){
shop_div.style.display='none';
main.style.display='block';
shoping=false;
}

function sell_off(a,c){sellx[0]=a;sellx[1]=c;
if(c==1){if(item_slot1[a]!=null){b=item_slot1[a][0]}else{b=-1}}
if(c==2){if(item_slot2[a]!=null){b=item_slot2[a][0]}else{b=-1}}
if(c==3){if(item_slot3[a]!=null){b=item_slot3[a][0]}else{b=-1}}
if(b>-1){
sell.innerHTML='вещь: '+inventory[b][2]+'<br>стоимость: '+inventory[b][4];
}
}
function sell_on(){if(sellx[0]!=null){
c=sellx[1];
a=sellx[0];
if(c==1){if(item_slot1[a]!=null){gold+=inventory[item_slot1[a][0]][4];item_slot1.splice(a, 1);}}
if(c==2){if(item_slot2[a]!=null){gold+=inventory[item_slot2[a][0]][4];item_slot2.splice(a, 1);}}
if(c==3){if(item_slot3[a]!=null){
gold+=inventory[item_slot3[a][0]][4];
item_slot3[a][1]--;
if(item_slot3[a][1]<1){item_slot3.splice(a, 1);}
}}
}
newdata();
sellx=[];
sell.innerHTML='вещь: <br>стоимость: ';
}

function buy_off(a){
buy.innerHTML='стоимость: '+goods[a][2];
buyx=a;
}

function buy_on(){
if(buyx!=null){
if((goods[buyx][1]==1)&&(gold>=goods[buyx][2])){gold-=goods[buyx][2];item_slot1[item_slot1.length]=[goods[buyx][0],1]}
if((goods[buyx][1]==2)&&(gold>=goods[buyx][2])){gold-=goods[buyx][2];item_slot2[item_slot2.length]=[goods[buyx][0],1]}
if((goods[buyx][1]==3)&&(gold>=goods[buyx][2])){
gold-=goods[buyx][2];
var i1=0;var i0=true;
for(i=0;i<item_slot3.length;i++){if((i0==true)&&(item_slot3[i][0]==goods[buyx][0])){i1=i;i0=false}}
if(i0==true){item_slot3[item_slot3.length]=[goods[buyx][0],1];}else{item_slot3[i1][1]++;}}
}newdata();}



function shop_1(){
goods[goods.length]=goods[0];
goods.splice(0, 1);
new_shop();
}
function shop_2(){
goods.splice(0, 0, goods[goods.length-1]);
goods.splice(goods.length-1, 1);
new_shop();
}

function new_shop(){
buy_0.style=inventory[goods[0][0]][6];
buy_0.title=inventory[goods[0][0]][2];
buy_1.style=inventory[goods[1][0]][6];
buy_1.title=inventory[goods[1][0]][2];
buy_2.style=inventory[goods[2][0]][6];
buy_2.title=inventory[goods[2][0]][2];
}


var buyx;
var sellx=[];
var shoping=false;

var goods=[
[201,3,50],
[202,3,75],
[211,3,50],
[212,3,75],

[10,1,150]


];

