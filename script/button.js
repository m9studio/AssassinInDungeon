/*движение игрока*/


var player_stop_run=0;
var player_stop_atack=0;
var player_time1=-1;
var player_time2=false;

function new_map_war(){
if(ground[py][px]==207){
if((map_class=='peaceful')){map_class='war';new_map();}else
if(map_class=='war'){maplvl++;new_map();}}
if((map_class=='peaceful')&&(px==0)){map_class='normal_0';new_map();}
if((map_class=='normal_0')&&(px==(ground[0].length-1))){map_class='peaceful';new_map(true, 1, 16);}
if((map_class=='peaceful')&&(py==0)){map_class='peaceful_0';new_map();}
if((map_class=='peaceful_0')&&(py==(ground.length-1))){map_class='peaceful';new_map(true, 14, 1);}

if((map_class=='normal_0')&&(px==0)){map_class='normal_1';new_map();}
if((map_class=='normal_1')&&(px==(ground[0].length-1))){map_class='normal_0';new_map(true, 1, 17);}

if((map_class=='normal_1')&&(px==0)){map_class='normal_2';new_map();}
if((map_class=='normal_2')&&(px==(ground[0].length-1))){map_class='normal_1';new_map(true, 1, 6);}

if((map_class=='normal_2')&&(px==0)){map_class='normal_3';new_map();}
if((map_class=='normal_3')&&(px==(ground[0].length-1))){map_class='normal_2';new_map(true, 1, 7);}

if((map_class=='normal_2')&&(py==(ground.length-1))){map_class='normal_4';new_map();}
if((map_class=='normal_4')&&(py==0)){map_class='normal_2';new_map(true, 9, 17);}



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

if(((layer1[py][px-1]>157)&&(layer1[py][px-1]<162))&&(layer1[py][px]==195+(player_skin*15))){bothp5(py,px-1)}
if(((layer1[py][px+1]>157)&&(layer1[py][px+1]<162))&&(layer1[py][px]==197+(player_skin*15))){bothp5(py,px+1)}
if(((layer1[py-1][px]>157)&&(layer1[py-1][px]<162))&&(layer1[py][px]==196+(player_skin*15))){bothp5(py-1,px)}
if(((layer1[py+1][px]>157)&&(layer1[py+1][px]<162))&&(layer1[py][px]==198+(player_skin*15))){bothp5(py+1,px)}

if(((layer1[py][px-1]>172)&&(layer1[py][px-1]<177))&&(layer1[py][px]==195+(player_skin*15))){bothp6(py,px-1)}
if(((layer1[py][px+1]>172)&&(layer1[py][px+1]<177))&&(layer1[py][px]==197+(player_skin*15))){bothp6(py,px+1)}
if(((layer1[py-1][px]>172)&&(layer1[py-1][px]<177))&&(layer1[py][px]==196+(player_skin*15))){bothp6(py-1,px)}
if(((layer1[py+1][px]>172)&&(layer1[py+1][px]<177))&&(layer1[py][px]==198+(player_skin*15))){bothp6(py+1,px)}

if(((layer1[py][px-1]>187)&&(layer1[py][px-1]<192))&&(layer1[py][px]==195+(player_skin*15))){bothp7(py,px-1)}
if(((layer1[py][px+1]>187)&&(layer1[py][px+1]<192))&&(layer1[py][px]==197+(player_skin*15))){bothp7(py,px+1)}
if(((layer1[py-1][px]>187)&&(layer1[py-1][px]<192))&&(layer1[py][px]==196+(player_skin*15))){bothp7(py-1,px)}
if(((layer1[py+1][px]>187)&&(layer1[py+1][px]<192))&&(layer1[py][px]==198+(player_skin*15))){bothp7(py+1,px)}







if(((layer1[py][px-1]>67)&&(layer1[py][px-1]<72))&&(layer1[py][px]==195+(player_skin*15))){bothp8(py,px-1)}
if(((layer1[py][px+1]>67)&&(layer1[py][px+1]<72))&&(layer1[py][px]==197+(player_skin*15))){bothp8(py,px+1)}
if(((layer1[py-1][px]>67)&&(layer1[py-1][px]<72))&&(layer1[py][px]==196+(player_skin*15))){bothp8(py-1,px)}
if(((layer1[py+1][px]>67)&&(layer1[py+1][px]<72))&&(layer1[py][px]==198+(player_skin*15))){bothp8(py+1,px)}

if(((layer1[py][px-1]>217)&&(layer1[py][px-1]<222))&&(layer1[py][px]==195+(player_skin*15))){bothp9(py,px-1)}
if(((layer1[py][px+1]>217)&&(layer1[py][px+1]<222))&&(layer1[py][px]==197+(player_skin*15))){bothp9(py,px+1)}
if(((layer1[py-1][px]>217)&&(layer1[py-1][px]<222))&&(layer1[py][px]==196+(player_skin*15))){bothp9(py-1,px)}
if(((layer1[py+1][px]>217)&&(layer1[py+1][px]<222))&&(layer1[py][px]==198+(player_skin*15))){bothp9(py+1,px)}

if(((layer1[py][px-1]>202)&&(layer1[py][px-1]<207))&&(layer1[py][px]==195+(player_skin*15))){bothp10(py,px-1)}
if(((layer1[py][px+1]>202)&&(layer1[py][px+1]<207))&&(layer1[py][px]==197+(player_skin*15))){bothp10(py,px+1)}
if(((layer1[py-1][px]>202)&&(layer1[py-1][px]<207))&&(layer1[py][px]==196+(player_skin*15))){bothp10(py-1,px)}
if(((layer1[py+1][px]>202)&&(layer1[py+1][px]<207))&&(layer1[py][px]==198+(player_skin*15))){bothp10(py+1,px)}





layer1[py][px]+=4;drawImage();
setTimeout("layer1[py][px]-=4;drawImage();", 150);

if(speed_atk_on<401){player_stop_atack=500-speed_atk_on;}else{player_stop_atack=100}



}}

}}






document.onkeydown = function checkKeycode(event){
quest_div0.style.display="none";quest_div.innerHTML="";

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
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
}


if(keycode==38||keycode==87){var a=true;
if(layer1[py-1][px]==0){layer1[py][px]=0;py-=1;
}else if(layer1[py-1][px]==53){layer1[py-1][px]=54;php=pmhp;newdata();
}else if(layer1[py-1][px]==153){home_on();
}else if(layer1[py-1][px]==113){shop_on();
}else if((layer1[py-1][px]==11)&&(map_class=='normal_3')){quest_open(1);
}else if((layer1[py-1][px]==11)&&(map_class=='quest_1-2')){quest_open(2);
}else if((layer1[py-1][px]==8)&&(map_class=='normal_3')){quest_open(3);
}else if((layer1[py-1][px]==8)&&(map_class=='quest_3-4')){quest_open(4);
}else if(layer1[py-1][px]==39){map_class='peaceful';new_map(true, 22, 17);a=false;}
if(a==true){

layer1[py][px]=196+(player_skin*15);
new_map_war();
}if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}}
if(keycode==39||keycode==68){if(layer1[py][px+1]==0){layer1[py][px]=0;px+=1;}

layer1[py][px]=197+(player_skin*15);
new_map_war();
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
}



if(keycode==40||keycode==83){if(layer1[py+1][px]==0){layer1[py][px]=0;py+=1;}

layer1[py][px]=198+(player_skin*15);
new_map_war();
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
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

if(speed_atk_on<401){player_stop_atack=500-speed_atk_on;}else{player_stop_atack=100}
}}




}


function joystick_down(e){

music_game.play();

if(player_stop_run==0){

if(e==1){if(layer1[py][px-1]==0){layer1[py][px]=0;px-=1;}if(player_class=='creator'){layer1[py][px]=128;}

layer1[py][px]=195+(player_skin*15);
new_map_war();
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
}


if(e==2){var a=true;
if(layer1[py-1][px]==0){layer1[py][px]=0;py-=1;
}else if(layer1[py-1][px]==53){layer1[py-1][px]=54;php=pmhp;newdata();
}else if(layer1[py-1][px]==39){map_class='peaceful';new_map(true, 22, 17);a=false;}
if(a==true){

layer1[py][px]=196+(player_skin*15);
new_map_war();
}if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}}
if(e==3){if(layer1[py][px+1]==0){layer1[py][px]=0;px+=1;}

layer1[py][px]=197+(player_skin*15);
new_map_war();
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
}



if(e==4){if(layer1[py+1][px]==0){layer1[py][px]=0;py+=1;}

layer1[py][px]=198+(player_skin*15);
new_map_war();
if(speed_run_on<76){player_stop_run+=125-speed_run_on;}else{player_stop_run=50}
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

if(speed_atk_on<401){player_stop_atack=500-speed_atk_on;}else{player_stop_atack=100}
}}






















}


