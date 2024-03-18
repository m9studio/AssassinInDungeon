
function load_off(text){
load_div.style.display="none";null_div.style.display="block";
if(text!=''){load_on(text)}
quest_open(0)
}

function load_on(text){
var event = JSON.parse(text);

var id_load=event.a;

if(id_load==1){

ab=event.a1/event.a0;

if(ab==1){player_class='player'}
if(ab==2){player_class='beta'}
if(ab==3){player_class='admin'}
if(ab==4){player_class='creator'}

player_skin=event.a2/event.a0;
animation=event.a3/event.a0;
speed_atk_on=event.a4/event.a0;
speed_run_on=event.a5/event.a0;
php=event.a6/event.a0;
pmhp=event.a7/event.a0;
gold=event.a8/event.a0;
lvl=event.a9/event.a0;
xp=event.a10/event.a0;
def=event.a11/event.a0;
atk=event.a12/event.a0;
maplvl=event.a13/event.a0;
armor_slot=event.a14;
item_slot1=event.a15;
item_slot2=event.a16;
item_slot3=event.a17;
sword_slot=event.a18;
music_game.volume=event.m1;
music_game.src=event.m2;

if(event.a19!=null){
map_class=event.a19;
}
if(event.g1!=null){
ground=event.g1;
layer1=event.g2;
layer2=event.g3;
layer3=event.g4;
botx=event.b0;
botn1=event.b1;
botn2=event.b2;
botn3=event.b3;
botn4=event.b4;
botn5=event.b5;
botn6=event.b6;
botn7=event.b7;
botn8=event.b8;
botn9=event.b9;
botn10=event.b10;
py=event.yx1;
px=event.yx2;
dy=event.yx3;
dx=event.yx4;
map_object_animation=event.o1;
drawImage();}
if((event.a19!=null)&&(event.g1==null)){new_map()}
}



music_valume(0)
newdata();



aaa=event.q1;
for(i=0;aaa.length>i;i++){
quest_player[i]=aaa[i];
}

}




function save_on(a_id){

var text='{}';

var event = JSON.parse(text);


event.a=1;
event.a0=Math.floor(Math.random() * (19 - 1 + 1)) + 2;


var ab=0;

if(player_class=='player'){ab=1;}
if(player_class=='beta'){ab=2;}
if(player_class=='admin'){ab=3;}
if(player_class=='creator'){ab=4;}
event.a1=ab*event.a0;

event.a2=player_skin*event.a0;
event.a3=animation*event.a0;
event.a4=speed_atk_on*event.a0;
event.a5=speed_run_on*event.a0;
event.a6=php*event.a0;
event.a7=pmhp*event.a0;
event.a8=gold*event.a0;
event.a9=lvl*event.a0;
event.a10=xp*event.a0;
event.a11=def*event.a0;
event.a12=atk*event.a0;
event.a13=maplvl*event.a0;
event.a14=armor_slot;
event.a15=item_slot1;
event.a16=item_slot2;
event.a17=item_slot3;
event.a18=sword_slot;
event.m1=music_game.volume;
event.m2=music_game.src;
event.q1=quest_player;
if(a_id>=1){
event.a19=map_class;
} 
if(a_id==2){
event.g1=ground;
event.g2=layer1;
event.g3=layer2;
event.g4=layer3;
event.b0=botx;
event.b1=botn1;
event.b2=botn2;
event.b3=botn3;
event.b4=botn4;
event.b5=botn5;
event.b6=botn6;
event.b7=botn7;
event.b8=botn8;
event.b9=botn9;
event.b10=botn10;
event.yx1=py;
event.yx2=px;
event.yx3=dy;
event.yx4=dx;
event.o1=map_object_animation;
}



var str = JSON.stringify(event);

/*
alert(str)
prompt ("Копирование в буфер: Ctrl+C, Enter", str);
json_data_on.innerHTML=str;
json_data.value=str;
*/

json_data_1.value=str;


}























