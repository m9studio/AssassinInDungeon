/*основной код игры*/
newdata();
items();
var tilesetImage = new Image();
tilesetImage.src = 'img/map.png';
tilesetImage.onload = drawImage;

var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');

var tileSize = 26*1;/* Размер плитки (26*26)*/

canvas.height = 15*tileSize;
canvas.width  = 15*tileSize;

var rowTileCount = 15;/* Количество плиток в каждом ряду фона*/
var colTileCount = 15;/* Количество плиток в каждом столбце фона*/
var imageNumTiles = 15;  /* Количество плиток в каждом ряду тайлсета*/


function drawImage () {
var r1=0; var c1=0;
if((px>7)&&(px<(ground[0].length-7))){c1=px-7;}else if(px>(ground[0].length-8)){c1=(ground[0].length-15);}
if((py>7)&&(py<(ground.length-7))){r1=py-7;}else if(py>(ground.length-8)){r1=(ground.length-15);}
 for (var r = 0; r < rowTileCount; r++) {for (var c = 0; c < colTileCount; c++) {
var tile = ground[ r+r1 ][ c+c1 ];
var tileRow = (tile / imageNumTiles) | 0; // Операция "побитовое ИЛИ"
var tileCol = (tile % imageNumTiles) | 0;
ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize);
tile =layer1[ r+r1 ][ c+c1 ]; 
tileRow = (tile / imageNumTiles) | 0; 
tileCol = (tile % imageNumTiles) | 0; 
ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize); 
   }} }

function newdata(){
if(99<xp){pmhp+=10;xp-=100;lvl++;gold+=5*lvl;php=pmhp;}
hp1.innerHTML=php+'/'+pmhp;
def1.innerHTML=def/10;
lvl1.innerHTML=lvl;
document.getElementById('lvl1').title=xp+'/'+100;
gold1.innerHTML=gold;

for(i=1;item_slot.length>i;i++){if(item_slot[i]!=0){
if(item_slot[i][1]=='crystal'){
if(item_slot[i][3]<1){item_slot.splice(i,1);item_slot[15]=0;}
item_slot[i][2]=' x'+item_slot[i][3];}
}}

if(sword_slot[1]!=0){sword1.src='items/'+sword_slot[1][6];sword1.title=sword_slot[1][2]+' atk: '+(sword_slot[1][5]/10);
}else{sword1.src='items/6.png';sword1.title="пусто";}

if(armor_slot[1]!=0){armor1.src='items/'+armor_slot[1][6];armor1.title=armor_slot[1][2]+' def: '+(armor_slot[1][5]/10);
}else{armor1.src='items/1.png';armor1.title="пусто";}
if(armor_slot[2]!=0){armor2.src='items/'+armor_slot[2][6];armor2.title=armor_slot[2][2]+' def: '+(armor_slot[2][5]/10);
}else{armor2.src='items/2.png';armor2.title="пусто";}
if(armor_slot[3]!=0){armor3.src='items/'+armor_slot[3][6];armor3.title=armor_slot[3][2]+' def: '+(armor_slot[3][5]/10);
}else{armor3.src='items/3.png';armor3.title="пусто";}
if(armor_slot[4]!=0){armor4.src='items/'+armor_slot[4][6];armor4.title=armor_slot[4][2]+' def: '+(armor_slot[4][5]/10);
}else{armor4.src='items/4.png';armor4.title="пусто";}
if(armor_slot[5]!=0){armor5.src='items/'+armor_slot[5][6];armor5.title=armor_slot[5][2]+' def: '+(armor_slot[5][5]/10);
}else{armor5.src='items/5.png';armor5.title="пусто";}

if(item_slot[1]!=0){item1.src='items/'+item_slot[1][6];item1.title=item_slot[1][2];
}else{item1.src='items/0.png';item1.title="пусто";}
if(item_slot[2]!=0){item2.src='items/'+item_slot[2][6];item2.title=item_slot[2][2];
}else{item2.src='items/0.png';item2.title="пусто";}
if(item_slot[3]!=0){item3.src='items/'+item_slot[3][6];item3.title=item_slot[3][2];
}else{item3.src='items/0.png';item3.title="пусто";}
if(item_slot[4]!=0){item4.src='items/'+item_slot[4][6];item4.title=item_slot[4][2];
}else{item4.src='items/0.png';item4.title="пусто";}
if(item_slot[5]!=0){item5.src='items/'+item_slot[5][6];item5.title=item_slot[5][2];
}else{item5.src='items/0.png';item5.title="пусто";}

if(item_slot[6]!=0){item6.src='items/'+item_slot[6][6];item6.title=item_slot[6][2];
}else{item6.src='items/0.png';item6.title="пусто";}
if(item_slot[7]!=0){item7.src='items/'+item_slot[7][6];item7.title=item_slot[7][2];
}else{item7.src='items/0.png';item7.title="пусто";}
if(item_slot[8]!=0){item8.src='items/'+item_slot[8][6];item8.title=item_slot[8][2];
}else{item8.src='items/0.png';item8.title="пусто";}
if(item_slot[9]!=0){item9.src='items/'+item_slot[9][6];item9.title=item_slot[9][2];
}else{item9.src='items/0.png';item9.title="пусто";}
if(item_slot[10]!=0){item10.src='items/'+item_slot[10][6];item10.title=item_slot[10][2];
}else{item10.src='items/0.png';item10.title="пусто";}

if(item_slot[11]!=0){item11.src='items/'+item_slot[11][6];item11.title=item_slot[11][2];
}else{item11.src='items/0.png';item11.title="пусто";}
if(item_slot[12]!=0){item12.src='items/'+item_slot[12][6];item12.title=item_slot[12][2];
}else{item12.src='items/0.png';item12.title="пусто";}
if(item_slot[13]!=0){item13.src='items/'+item_slot[13][6];item13.title=item_slot[13][2];
}else{item13.src='items/0.png';item13.title="пусто";}
if(item_slot[14]!=0){item14.src='items/'+item_slot[14][6];item14.title=item_slot[14][2];
}else{item14.src='items/0.png';item14.title="пусто";}
if(item_slot[15]!=0){item15.src='items/'+item_slot[15][6];item15.title=item_slot[15][2];
}else{item15.src='items/0.png';item15.title="пусто";}




}




function playerhp1(){php-=Math.floor(250/def);newdata();}
function playerhp2(){php-=Math.floor(300/def);newdata();}


function bothp1(y,x){layer2[y][x]-=atk;
if(layer2[y][x]<1){
layer1[y][x]=0;drawImage();botn1--;gold++;xp+=3;newdata();
var b=Math.floor(Math.random()*100)+1;var n=0;
if((0<b)&&(b<2)){n=101;}if((1<b)&&(b<3)){n=102;}if((2<b)&&(b<4)){n=103;}if((3<b)&&(b<5)){n=104;}if((4<b)&&(b<6)){n=105;}
if((5<b)&&(b<41)){n=201;}if((40<b)&&(b<101)){n=211;}
if(n<201){
for(i=1;item_slot.length>i;i++){
if(item_slot[i]==0){item_slot[i]=inventory[n];
i=item_slot.length;newdata();}}
}
if(200<n){var for_on=false;
for(i=1;item_slot.length>i;i++){
if((for_on==false)&&(item_slot[i]!=0)){
if(item_slot[i][0]==n){
item_slot[i][3]++;
for_on=true;
i=item_slot.length;}}
if((for_on==false)&&(item_slot[i]==0)){
item_slot[i]=inventory[n];
for_on=true;
i=item_slot.length;}}}}}

function bothp2(y,x){layer2[y][x]-=atk;
if(layer2[y][x]<1){
layer1[y][x]=0;drawImage();botn2--;gold++;xp+=3;newdata();}}

document.onkeyup = function checkKeycode(event){
    var keycode;
    if(!event) var event = window.event;
   keycode = event.which; 
if(player_stop==0){
if(keycode==37||keycode==65){if(layer1[py][px-1]==0){layer1[py][px]=0;px-=1;}if(player_class=='creator'){layer1[py][px]=128;}
if(player_class=='creator'){layer1[py][px]=128;}
if(player_class=='player1'){layer1[py][px]=195;}
if(player_class=='player2'){layer1[py][px]=210;}
if(player_class=='player3'){layer1[py][px]=225;}
if(player_class=='player4'){layer1[py][px]=240;}
player_stop+=1;
}
if(keycode==38||keycode==87){var a=true;
if(layer1[py-1][px]==0){layer1[py][px]=0;py-=1;
}else if(layer1[py-1][px]==53){layer1[py-1][px]=54;php=pmhp;newdata();
}else if((layer1[py-1][px]==39)&&((botn1<1)&&(botn2<1)&&(botn3<1)&&(botn4<1)&&(botn5<1)&&(botn6<1)&&(botn7<1)&&(botn8<1)&&(botn9<1)&&(botn10<1))){maplvl++;new_map();a=false;}
if(a==true){
if(player_class=='creator'){layer1[py][px]=129;}
if(player_class=='player1'){layer1[py][px]=196;}
if(player_class=='player2'){layer1[py][px]=211;}
if(player_class=='player3'){layer1[py][px]=226;}
if(player_class=='player4'){layer1[py][px]=241;}
}player_stop+=1;}
if(keycode==39||keycode==68){if(layer1[py][px+1]==0){layer1[py][px]=0;px+=1;}
if(player_class=='creator'){layer1[py][px]=130;}
if(player_class=='player1'){layer1[py][px]=197;}
if(player_class=='player2'){layer1[py][px]=212;}
if(player_class=='player3'){layer1[py][px]=227;}
if(player_class=='player4'){layer1[py][px]=242;}
player_stop+=1;
}
if(keycode==40||keycode==83){if(layer1[py+1][px]==0){layer1[py][px]=0;py+=1;}
if(player_class=='creator'){layer1[py][px]=131;}
if(player_class=='player1'){layer1[py][px]=198;}
if(player_class=='player2'){layer1[py][px]=213;}
if(player_class=='player3'){layer1[py][px]=228;}
if(player_class=='player4'){layer1[py][px]=243;}
player_stop+=1;
}
if(keycode==32){
player_stop+=1;
if(((layer1[py][px-1]>22)&&(layer1[py][px-1]<27))&&(layer1[py][px]==8)){bothp1(py,px-1)}
if(((layer1[py][px+1]>22)&&(layer1[py][px+1]<27))&&(layer1[py][px]==10)){bothp1(py,px+1)}
if(((layer1[py-1][px]>22)&&(layer1[py-1][px]<27))&&(layer1[py][px]==9)){bothp1(py-1,px)}
if(((layer1[py+1][px]>22)&&(layer1[py+1][px]<27))&&(layer1[py][px]==11)){bothp1(py+1,px)}

if(((layer1[py][px-1]>82)&&(layer1[py][px-1]<87))&&(layer1[py][px]==8)){bothp2(py,px-1)}
if(((layer1[py][px+1]>82)&&(layer1[py][px+1]<87))&&(layer1[py][px]==10)){bothp2(py,px+1)}
if(((layer1[py-1][px]>82)&&(layer1[py-1][px]<87))&&(layer1[py][px]==9)){bothp2(py-1,px)}
if(((layer1[py+1][px]>82)&&(layer1[py+1][px]<87))&&(layer1[py][px]==11)){bothp2(py+1,px)}
}
drawImage();
}}


function items(){
var tilesetImage2 = new Image();
tilesetImage2.src = 'img/item.png';

var canvas1 = document.getElementById('hp');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('lvl');
var ctx2 = canvas2.getContext('2d');
var canvas3 = document.getElementById('gold');
var ctx3 = canvas3.getContext('2d');
var canvas4 = document.getElementById('menus');
var ctx4 = canvas4.getContext('2d');
var canvas5 = document.getElementById('def');
var ctx5 = canvas5.getContext('2d');
canvas1.height=canvas1.width=canvas2.height=canvas2.width=canvas3.height=canvas3.width=canvas4.height=canvas4.width=canvas5.height=canvas5.width=30;
var tileSize2 = 60;
tilesetImage2.onload = function(){
var imageNumTiles2 = 3;
var tile2=3;
var tileRow2 = (tile2 / imageNumTiles2) | 0; 
var tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx1.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2*2, tileSize2*2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2);
tile2=1;
tileRow2 = (tile2 / imageNumTiles2) | 0; 
tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx2.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2*2, tileSize2*2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2);
tile2=0;
tileRow2 = (tile2 / imageNumTiles2) | 0; 
tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx3.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2*2, tileSize2*2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2); 
tile2=2;
tileRow2 = (tile2 / imageNumTiles2) | 0; 
tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx4.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2*2, tileSize2*2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2); 
tile2=4;
tileRow2 = (tile2 / imageNumTiles2) | 0; 
tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx5.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2*2, tileSize2*2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2); 

}}