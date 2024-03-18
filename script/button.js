/*движение игрока*/


var player_stop_run=0;
var player_stop_atack=0;
var player_time1=-1;
var player_time2=false;

function new_map_war(){
if(ground[py][px]==207){
if(map_class=='peaceful'){map_class='war';new_map();}else
if(map_class=='war'){maplvl++;new_map();}}
if((map_class=='peaceful')&&(px==0)){map_class='normal_0';new_map();}
if((map_class=='normal_0')&&(px==(ground[0].length-1))){map_class='peaceful';new_map(true, 1, 16);}

}

document.onkeyup = function checkKeycode(event){
    var keycode;
    if(!event) var event = window.event;
   keycode = event.which;
if(joystick.style.display=='none'){
clearInterval(player_time1);
player_time2=false;

if((player_stop_atack==0)&&(map_class!='peaceful')){if(keycode==32){
if(((layer1[py][px-1]>22)&&(layer1[py][px-1]<27))&&(layer1[py][px]==195+(player_skin*15))){bothp1(py,px-1)}
if(((layer1[py][px+1]>22)&&(layer1[py][px+1]<27))&&(layer1[py][px]==197+(player_skin*15))){bothp1(py,px+1)}
if(((layer1[py-1][px]>22)&&(layer1[py-1][px]<27))&&(layer1[py][px]==196+(player_skin*15))){bothp1(py-1,px)}
if(((layer1[py+1][px]>22)&&(layer1[py+1][px]<27))&&(layer1[py][px]==198+(player_skin*15))){bothp1(py+1,px)}

if(((layer1[py][px-1]>82)&&(layer1[py][px-1]<87))&&(layer1[py][px]==195+(player_skin*15))){bothp2(py,px-1)}
if(((layer1[py][px+1]>82)&&(layer1[py][px+1]<87))&&(layer1[py][px]==197+(player_skin*15))){bothp2(py,px+1)}
if(((layer1[py-1][px]>82)&&(layer1[py-1][px]<87))&&(layer1[py][px]==196+(player_skin*15))){bothp2(py-1,px)}
if(((layer1[py+1][px]>82)&&(layer1[py+1][px]<87))&&(layer1[py][px]==198+(player_skin*15))){bothp2(py+1,px)}

if(((layer1[py][px-1]>142)&&(layer1[py][px-1]<147))&&(layer1[py][px]==195+(player_skin*15))){bothp3(py,px-1)}
if(((layer1[py][px+1]>142)&&(layer1[py][px+1]<147))&&(layer1[py][px]==197+(player_skin*15))){bothp3(py,px+1)}
if(((layer1[py-1][px]>142)&&(layer1[py-1][px]<147))&&(layer1[py][px]==196+(player_skin*15))){bothp3(py-1,px)}
if(((layer1[py+1][px]>142)&&(layer1[py+1][px]<147))&&(layer1[py][px]==198+(player_skin*15))){bothp3(py+1,px)}

if(((layer1[py][px-1]>127)&&(layer1[py][px-1]<132))&&(layer1[py][px]==195+(player_skin*15))){bothp4(py,px-1)}
if(((layer1[py][px+1]>127)&&(layer1[py][px+1]<132))&&(layer1[py][px]==197+(player_skin*15))){bothp4(py,px+1)}
if(((layer1[py-1][px]>127)&&(layer1[py-1][px]<132))&&(layer1[py][px]==196+(player_skin*15))){bothp4(py-1,px)}
if(((layer1[py+1][px]>127)&&(layer1[py+1][px]<132))&&(layer1[py][px]==198+(player_skin*15))){bothp4(py+1,px)}


layer1[py][px]+=4;drawImage();
setTimeout("layer1[py][px]-=4;drawImage();", 150);

player_stop_atack=500;
}}

}}






document.onkeydown = function checkKeycode(event){
    var keycode;
    if(!event) var event = window.event;
   keycode = event.which;

music_game.play();
if(player_time2==false){player_time2=true;
// player_timing2();
player_time1=setInterval(function(){
if((player_stop_run==0)&&(php>0)){

if(joystick.style.display=='none'){


if(keycode==37||keycode==65){if(layer1[py][px-1]==0){layer1[py][px]=0;px-=1;}if(player_class=='creator'){layer1[py][px]=128;}

layer1[py][px]=195+(player_skin*15);
new_map_war();
player_stop_run+=125;
}


if(keycode==38||keycode==87){var a=true;
if(layer1[py-1][px]==0){layer1[py][px]=0;py-=1;
}else if(layer1[py-1][px]==53){layer1[py-1][px]=54;php=pmhp;newdata();
}else if(layer1[py-1][px]==39){map_class='peaceful';new_map(true, 22, 17);a=false;}
if(a==true){

layer1[py][px]=196+(player_skin*15);
new_map_war();
}player_stop_run+=125;}
if(keycode==39||keycode==68){if(layer1[py][px+1]==0){layer1[py][px]=0;px+=1;}

layer1[py][px]=197+(player_skin*15);
new_map_war();
player_stop_run+=125;
}



if(keycode==40||keycode==83){if(layer1[py+1][px]==0){layer1[py][px]=0;py+=1;}

layer1[py][px]=198+(player_skin*15);
new_map_war();
player_stop_run+=125;
}

}

drawImage();
}},1);}


}



function joystick_up(e){


clearInterval(player_time1);
player_time2=false;

if((player_stop_atack==0)&&(map_class!='peaceful')){if(e==1){
if(((layer1[py][px-1]>22)&&(layer1[py][px-1]<27))&&(layer1[py][px]==195+(player_skin*15))){bothp1(py,px-1)}
if(((layer1[py][px+1]>22)&&(layer1[py][px+1]<27))&&(layer1[py][px]==197+(player_skin*15))){bothp1(py,px+1)}
if(((layer1[py-1][px]>22)&&(layer1[py-1][px]<27))&&(layer1[py][px]==196+(player_skin*15))){bothp1(py-1,px)}
if(((layer1[py+1][px]>22)&&(layer1[py+1][px]<27))&&(layer1[py][px]==198+(player_skin*15))){bothp1(py+1,px)}

if(((layer1[py][px-1]>82)&&(layer1[py][px-1]<87))&&(layer1[py][px]==195+(player_skin*15))){bothp2(py,px-1)}
if(((layer1[py][px+1]>82)&&(layer1[py][px+1]<87))&&(layer1[py][px]==197+(player_skin*15))){bothp2(py,px+1)}
if(((layer1[py-1][px]>82)&&(layer1[py-1][px]<87))&&(layer1[py][px]==196+(player_skin*15))){bothp2(py-1,px)}
if(((layer1[py+1][px]>82)&&(layer1[py+1][px]<87))&&(layer1[py][px]==198+(player_skin*15))){bothp2(py+1,px)}

if(((layer1[py][px-1]>142)&&(layer1[py][px-1]<147))&&(layer1[py][px]==195+(player_skin*15))){bothp3(py,px-1)}
if(((layer1[py][px+1]>142)&&(layer1[py][px+1]<147))&&(layer1[py][px]==197+(player_skin*15))){bothp3(py,px+1)}
if(((layer1[py-1][px]>142)&&(layer1[py-1][px]<147))&&(layer1[py][px]==196+(player_skin*15))){bothp3(py-1,px)}
if(((layer1[py+1][px]>142)&&(layer1[py+1][px]<147))&&(layer1[py][px]==198+(player_skin*15))){bothp3(py+1,px)}

if(((layer1[py][px-1]>127)&&(layer1[py][px-1]<132))&&(layer1[py][px]==195+(player_skin*15))){bothp4(py,px-1)}
if(((layer1[py][px+1]>127)&&(layer1[py][px+1]<132))&&(layer1[py][px]==197+(player_skin*15))){bothp4(py,px+1)}
if(((layer1[py-1][px]>127)&&(layer1[py-1][px]<132))&&(layer1[py][px]==196+(player_skin*15))){bothp4(py-1,px)}
if(((layer1[py+1][px]>127)&&(layer1[py+1][px]<132))&&(layer1[py][px]==198+(player_skin*15))){bothp4(py+1,px)}


layer1[py][px]+=4;drawImage();
setTimeout("layer1[py][px]-=4;drawImage();", 150);

player_stop_atack=500;
}}




}


function joystick_down(e){

music_game.play();

if(player_stop_run==0){

if(e==1){if(layer1[py][px-1]==0){layer1[py][px]=0;px-=1;}if(player_class=='creator'){layer1[py][px]=128;}

layer1[py][px]=195+(player_skin*15);
new_map_war();
player_stop_run+=125;
}


if(e==2){var a=true;
if(layer1[py-1][px]==0){layer1[py][px]=0;py-=1;
}else if(layer1[py-1][px]==53){layer1[py-1][px]=54;php=pmhp;newdata();
}else if(layer1[py-1][px]==39){map_class='peaceful';new_map(true, 22, 17);a=false;}
if(a==true){

layer1[py][px]=196+(player_skin*15);
new_map_war();
}player_stop_run+=125;}
if(e==3){if(layer1[py][px+1]==0){layer1[py][px]=0;px+=1;}

layer1[py][px]=197+(player_skin*15);
new_map_war();
player_stop_run+=125;
}



if(e==4){if(layer1[py+1][px]==0){layer1[py][px]=0;py+=1;}

layer1[py][px]=198+(player_skin*15);
new_map_war();
player_stop_run+=125;
}

drawImage();
}




if((player_stop_atack==0)&&(map_class!='peaceful')){if(e==0){
if(((layer1[py][px-1]>22)&&(layer1[py][px-1]<27))&&(layer1[py][px]==195+(player_skin*15))){bothp1(py,px-1)}
if(((layer1[py][px+1]>22)&&(layer1[py][px+1]<27))&&(layer1[py][px]==197+(player_skin*15))){bothp1(py,px+1)}
if(((layer1[py-1][px]>22)&&(layer1[py-1][px]<27))&&(layer1[py][px]==196+(player_skin*15))){bothp1(py-1,px)}
if(((layer1[py+1][px]>22)&&(layer1[py+1][px]<27))&&(layer1[py][px]==198+(player_skin*15))){bothp1(py+1,px)}

if(((layer1[py][px-1]>82)&&(layer1[py][px-1]<87))&&(layer1[py][px]==195+(player_skin*15))){bothp2(py,px-1)}
if(((layer1[py][px+1]>82)&&(layer1[py][px+1]<87))&&(layer1[py][px]==197+(player_skin*15))){bothp2(py,px+1)}
if(((layer1[py-1][px]>82)&&(layer1[py-1][px]<87))&&(layer1[py][px]==196+(player_skin*15))){bothp2(py-1,px)}
if(((layer1[py+1][px]>82)&&(layer1[py+1][px]<87))&&(layer1[py][px]==198+(player_skin*15))){bothp2(py+1,px)}

if(((layer1[py][px-1]>142)&&(layer1[py][px-1]<147))&&(layer1[py][px]==195+(player_skin*15))){bothp3(py,px-1)}
if(((layer1[py][px+1]>142)&&(layer1[py][px+1]<147))&&(layer1[py][px]==197+(player_skin*15))){bothp3(py,px+1)}
if(((layer1[py-1][px]>142)&&(layer1[py-1][px]<147))&&(layer1[py][px]==196+(player_skin*15))){bothp3(py-1,px)}
if(((layer1[py+1][px]>142)&&(layer1[py+1][px]<147))&&(layer1[py][px]==198+(player_skin*15))){bothp3(py+1,px)}

if(((layer1[py][px-1]>127)&&(layer1[py][px-1]<132))&&(layer1[py][px]==195+(player_skin*15))){bothp4(py,px-1)}
if(((layer1[py][px+1]>127)&&(layer1[py][px+1]<132))&&(layer1[py][px]==197+(player_skin*15))){bothp4(py,px+1)}
if(((layer1[py-1][px]>127)&&(layer1[py-1][px]<132))&&(layer1[py][px]==196+(player_skin*15))){bothp4(py-1,px)}
if(((layer1[py+1][px]>127)&&(layer1[py+1][px]<132))&&(layer1[py][px]==198+(player_skin*15))){bothp4(py+1,px)}


layer1[py][px]+=4;drawImage();
setTimeout("layer1[py][px]-=4;drawImage();", 150);

player_stop_atack=500;
}}






















}


