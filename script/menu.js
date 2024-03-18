
function shopon1(){
if(gold>249){pmhp+=5;gold-=250;newdata()}}
function shopon2(){
if(gold>499){def++;gold-=500;newdata();}}

function shopon3(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('menudiv')[0].style.display='block';
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';}

function menuon3(){
info1.style.display='block';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('menudiv')[0].style.display='none';
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';}

function menuon2(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('menudiv')[0].style.display='none';
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='block';}

function menuon1(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('main')[0].style.display='block';
document.getElementsByClassName('shopdiv')[0].style.display='none';
document.getElementsByClassName('menudiv')[0].style.display='none';}

function menuon0(){if(php>0){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';
document.getElementsByClassName('menudiv')[0].style.display='block';
}}

function menuon4(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='block';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="none";
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';
document.getElementsByClassName('menudiv')[0].style.display='none';
}

function status_on(){
info1.style.display='none';
home_menu.style.display='none';
save_div.style.display='none';
alert_div.style.display='none';
shop_div.style.display='none';
quest_div0.style.display="none";
statusp.style.display="block";
document.getElementsByClassName('main')[0].style.display='none';
document.getElementsByClassName('shopdiv')[0].style.display='none';
document.getElementsByClassName('menudiv')[0].style.display='none';

p_xp.innerHTML='опыт : '+xp;
p_def.innerHTML='защита : '+def/10;
p_atk.innerHTML='сила : '+atk/10;
p_atk_speed.innerHTML='скорость атаки : '+speed_atk_on;
p_run_speed.innerHTML='скорость ходьбы : '+speed_run_on;
}


function special_right(){command();}

function joystick_on(){
if(joystick.style.display=='none'){
joystick.style.display='block'
}else{
joystick.style.display='none'
}}

function player_respawn(){
document.getElementsByClassName('main')[0].style.display='block';
dead.style.display='none';

if(xp>((20*lvl)-1)){xp-=20*lvl
}else if((lvl==1)&&(xp<20)){xp=0
}else{xp+=((lvl-1)*100)-20*lvl;pmhp-=10;lvl--}




php=pmhp;
newdata();
}

function armor_off(a){
if(armor_slot[a]!=0){
i=item_slot2.length;

item_slot2[i]=armor_slot[a];
def-=inventory[armor_slot[a][0]][5];
speed_run_on+=inventory[armor_slot[a][0]][7];
armor_slot[a]=0;
speed_run_atk_off();
newdata();
}}

function sword_off(a){
if(sword_slot[a]!=0){
i=item_slot1.length

item_slot1[i]=sword_slot[a];
atk-=inventory[sword_slot[a][0]][5];
speed_atk_on+=inventory[sword_slot[a][0]][7];
sword_slot[a]=0;
speed_run_atk_off();
newdata();
}}


function item1_off(a){
if(shoping==false){
if(item_slot1[a]!=null){
if(inventory[item_slot1[a][0]][1]=='sword'){
if(sword_slot[inventory[item_slot1[a][0]][3]]==0){
sword_slot[inventory[item_slot1[a][0]][3]]=item_slot1[a];
atk+=inventory[item_slot1[a][0]][5];

speed_atk_on-=inventory[item_slot1[a][0]][7];

item_slot1.splice(a, 1);

speed_run_atk_on();

newdata();}}


}}else{
sell_off(a,1)
}}


function item2_off(a){
if(shoping==false){
if(item_slot2[a]!=null){
if(inventory[item_slot2[a][0]][1]=='armor'){
if(armor_slot[inventory[item_slot2[a][0]][3]]==0){
armor_slot[inventory[item_slot2[a][0]][3]]=item_slot2[a];
def+=inventory[item_slot2[a][0]][5];

speed_run_on-=inventory[item_slot2[a][0]][7];

item_slot2.splice(a, 1);

speed_run_atk_on();

newdata();
}}}}else{
sell_off(a,2)
}}


function item3_off(a){
if(shoping==false){
if(item_slot3[a]!=null){
if(inventory[item_slot3[a][0]][1]=='crystal'){
if(inventory[item_slot3[a][0]][3]==1){if(php<pmhp){php+=inventory[item_slot3[a][0]][5];item_slot3[a][1]--}if(php>pmhp){php=pmhp}}
if(inventory[item_slot3[a][0]][3]==2){xp+=inventory[item_slot3[a][0]][5];item_slot3[a][1]--}
}
if(item_slot3[a][1]<1){item_slot3.splice(a, 1);}}
newdata();
}else{
sell_off(a,3)
}}

function item1_on(a){
if(item_slot1.length>3){
if(a==1){
item_slot1[item_slot1.length]=item_slot1[0];
item_slot1.splice(0, 1);
}
if(a==2){
item_slot1.splice(0, 0, item_slot1[item_slot1.length-1]);
item_slot1.splice(item_slot1.length-1, 1);
}}newdata();}


function item2_on(a){
if(item_slot2.length>3){
if(a==1){
item_slot2[item_slot2.length]=item_slot2[0];
item_slot2.splice(0, 1);
}
if(a==2){
item_slot2.splice(0, 0, item_slot2[item_slot2.length-1]);
item_slot2.splice(item_slot2.length-1, 1);
}}newdata();}


function item3_on(a){
if(item_slot3.length>3){
if(a==1){
item_slot3[item_slot3.length]=item_slot3[0];
item_slot3.splice(0, 1);
}
if(a==2){
item_slot3.splice(0, 0, item_slot3[item_slot3.length-1]);
item_slot3.splice(item_slot3.length-1, 1);
}}newdata();}





function shop_img(){
var tilesetImage2 = new Image();
tilesetImage2.src = 'img/item.png';

var canvas1 = document.getElementById('shop1');
var ctx1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('shop2');
var ctx2 = canvas2.getContext('2d');

canvas1.height=canvas1.width=canvas2.height=canvas2.width=60;
var tileSize2 = 60;
tilesetImage2.onload = function(){
var imageNumTiles2 = 3;
var tile2=3;
var tileRow2 = (tile2 / imageNumTiles2) | 0; 
var tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx1.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2, tileSize2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2);
tile2=4;
tileRow2 = (tile2 / imageNumTiles2) | 0; 
tileCol2 = (tile2 % imageNumTiles2) | 0; 
ctx2.drawImage(tilesetImage2, (tileCol2 * tileSize2), (tileRow2 * tileSize2), tileSize2, tileSize2, (0 * tileSize2), (0 * tileSize2), tileSize2, tileSize2);
}}




function speed_run_atk_on(){}

function speed_run_atk_off(){}



