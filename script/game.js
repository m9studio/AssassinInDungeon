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
if((195+(player_skin*15))>layer1[py][px]){layer1[py][px]+=4;}
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


tile =Math.floor((layer2[ r+r1 ][ c+c1 ]/layer3[ r+r1 ][ c+c1 ])*10); 
tile+=285;
tileRow = (tile / imageNumTiles) | 0; 
tileCol = (tile % imageNumTiles) | 0; 
ctx.drawImage(tilesetImage, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (c * tileSize), (r * tileSize), tileSize, tileSize); 
   }} }













function newdata(){






if(php<1){php=0;player_dead();}
if((100*lvl-1)<xp){pmhp+=10;xp-=100*lvl;lvl++;gold+=5*lvl;php=pmhp;}
hp1.innerHTML=php+'/'+pmhp;
//def1.innerHTML=def/10;
lvl1.innerHTML=lvl;
lvl1.title=xp+'/'+100*lvl;
gold1.innerHTML=gold;

/*for(i=1;item_slot.length>i;i++){if(item_slot[i]!=0){
if(item_slot[i][1]=='crystal'){
if(item_slot[i][3]<1){item_slot.splice(i,1);item_slot[15]=0;}
item_slot[i][2]=' x'+item_slot[i][3];}
}}*/


if(sword_slot[1]!=0){sword1.style=inventory[sword_slot[1][0]][6];sword1.title=inventory[sword_slot[1][0]][2]+' atk: '+(inventory[sword_slot[1][0]][5]/10);
}else{sword1.style='width:40px; height:40px; background:url(img/items.png) 0px -240px;';sword1.title="пусто";}


if(armor_slot[1]!=0){armor1.style=inventory[armor_slot[1][0]][6];armor1.title=inventory[armor_slot[1][0]][2]+' def: '+(inventory[armor_slot[1][0]][5]/10);
}else{armor1.style='width:40px; height:40px; background:url(img/items.png) 0px -40px;';armor1.title="пусто";}
if(armor_slot[2]!=0){armor2.style=inventory[armor_slot[2][0]][6];armor2.title=inventory[armor_slot[2][0]][2]+' def: '+(inventory[armor_slot[2][0]][5]/10);
}else{armor2.style='width:40px; height:40px; background:url(img/items.png) 0px -80px;';armor2.title="пусто";}
if(armor_slot[3]!=0){armor3.style=inventory[armor_slot[3][0]][6];armor3.title=inventory[armor_slot[3][0]][2]+' def: '+(inventory[armor_slot[3][0]][5]/10);
}else{armor3.style='width:40px; height:40px; background:url(img/items.png) 0px -120px;';armor3.title="пусто";}
if(armor_slot[4]!=0){armor4.style=inventory[armor_slot[4][0]][6];armor4.title=inventory[armor_slot[4][0]][2]+' def: '+(inventory[armor_slot[4][0]][5]/10);
}else{armor4.style='width:40px; height:40px; background:url(img/items.png) 0px -160px;';armor4.title="пусто";}
if(armor_slot[5]!=0){armor5.style=inventory[armor_slot[5][0]][6];armor5.title=inventory[armor_slot[5][0]][2]+' def: '+(inventory[armor_slot[5][0]][5]/10);
}else{armor5.style='width:40px; height:40px; background:url(img/items.png) 0px -200px;';armor5.title="пусто";}


if(item_slot1[0]!=null){item1_0.style=inventory[item_slot1[0][0]][6];item1_0.title=inventory[item_slot1[0][0]][2];
}else{item1_0.style='width:40px; height:40px; background:url(img/items.png)';item1_0.title="пусто";}
if(item_slot1[1]!=null){item1_1.style=inventory[item_slot1[1][0]][6];item1_1.title=inventory[item_slot1[1][0]][2];
}else{item1_1.style='width:40px; height:40px; background:url(img/items.png)';item1_1.title="пусто";}
if(item_slot1[2]!=null){item1_2.style=inventory[item_slot1[2][0]][6];item1_2.title=inventory[item_slot1[2][0]][2];
}else{item1_2.style='width:40px; height:40px; background:url(img/items.png)';item1_2.title="пусто";}


if(item_slot2[0]!=null){item2_0.style=inventory[item_slot2[0][0]][6];item2_0.title=inventory[item_slot2[0][0]][2];
}else{item2_0.style='width:40px; height:40px; background:url(img/items.png);';item2_0.title="пусто";}
if(item_slot2[1]!=null){item2_1.style=inventory[item_slot2[1][0]][6];item2_1.title=inventory[item_slot2[1][0]][2];
}else{item2_1.style='width:40px; height:40px; background:url(img/items.png);';item2_1.title="пусто";}
if(item_slot2[2]!=null){item2_2.style=inventory[item_slot2[2][0]][6];item2_2.title=inventory[item_slot2[2][0]][2];
}else{item2_2.style='width:40px; height:40px; background:url(img/items.png);';item2_2.title="пусто";}


if(item_slot3[0]!=null){item3_0.style=inventory[item_slot3[0][0]][6];item3_0.title=inventory[item_slot3[0][0]][2]+' x'+item_slot3[0][1];
}else{item3_0.style='width:40px; height:40px; background:url(img/items.png);';item3_0.title="пусто";}
if(item_slot3[1]!=null){item3_1.style=inventory[item_slot3[1][0]][6];item3_1.title=inventory[item_slot3[1][0]][2]+' x'+item_slot3[1][1];
}else{item3_1.style='width:40px; height:40px; background:url(img/items.png);';item3_1.title="пусто";}
if(item_slot3[2]!=null){item3_2.style=inventory[item_slot3[2][0]][6];item3_2.title=inventory[item_slot3[2][0]][2]+' x'+item_slot3[2][1];
}else{item3_2.style='width:40px; height:40px; background:url(img/items.png);';item3_2.title="пусто";}




//save_on(2);
}




function door_map(){
if((map_class=='war')&&(botn1==0)&&(botn2==0)){layer1[dy][dx]=0;drawImage();}
}














function player_dead(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';
document.getElementsByClassName('menudiv')[0].style.display='none';
dead.style.display='block';
map_class='peaceful';new_map(true, 4, 4);a=false;
}



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