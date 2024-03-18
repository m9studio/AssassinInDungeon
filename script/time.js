
var animation1=1;
var animation2=1;


/*var player_time3=setInterval(function(){if((195+(player_skin*15))>layer1[py][px]){layer1[py][px]+=4;}
if(player_stop_run>0){player_stop_run--}if(player_stop_atack>0){player_stop_atack--}},1);*/


var timer=setInterval(function(){
animation1++;

timemap();
if(php>0){
if(animation1%150==0){bot_0();}

if(botn1<0){new_bot1()};
if(animation1%250==0){bot_1();}
if(botn2<0){new_bot2()};
if(animation1%200==0){bot_2();}
if(botn3<0){new_bot3()};
if(animation1%350==0){bot_3();}
if(botn4<0){new_bot4()};
if(animation1%300==0){bot_4();}
}

if(player_stop_run>0){player_stop_run--}if(player_stop_atack>0){player_stop_atack--}

},1);




function timemap(){

/*if(animation1%250==0){animation2++;
for(i=0;ground.length>i;i++){
for(i1=0;ground[i].length>i1;i1++){
if(ground[i][i1]==103){ground[i][i1]=104}else if(ground[i][i1]==104){ground[i][i1]=103}
if(animation2%2==0){if(layer1[i][i1]==154){layer1[i][i1]=155}else if(layer1[i][i1]==155){layer1[i][i1]=154}}
if(animation2%2==0){if(layer1[i][i1]==156){layer1[i][i1]=157}}
if(animation2%4==1){if(layer1[i][i1]==157){layer1[i][i1]=156}}
}}*/


if(animation1%250==0){animation2++;
for(i=0;map_object_animation.length>i;i++){
i1=map_object_animation[i][0];
i2=map_object_animation[i][1];
if(ground[i1][i2]==103){ground[i1][i2]=104}else if(ground[i1][i2]==104){ground[i1][i2]=103}
if(animation2%2==0){if(layer1[i1][i2]==154){layer1[i1][i2]=155}else if(layer1[i1][i2]==155){layer1[i1][i2]=154}}
if(animation2%2==0){if(layer1[i1][i2]==157){layer1[i1][i2]=156}}
if(animation2%4==1){if(layer1[i1][i2]==156){layer1[i1][i2]=157}}




}drawImage();}


}










