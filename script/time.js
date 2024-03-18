
var animation1=1;
var animation2=1;





var timer=setInterval(function(){
animation1++;

if(animation1%250==0){timemap();}
if(php>0){
//if(animation1%150==0){bot_0();}

if(botn1<0){new_bot1()};
if((animation1%250==0)&&(botx[1]!=null)){bot_ai(1,1);}

if(botn2<0){new_bot2()};
if((animation1%200==0)&&(botx[2]!=null)){bot_ai(5,2);}

if(botn3<0){new_bot3()};
if((animation1%350==0)&&(botx[3]!=null)){bot_ai(9,3);}

if(botn4<0){new_bot4()};
if((animation1%300==0)&&(botx[4]!=null)){bot_ai(8,4);}

if(botn5<0){new_bot5()};
if((animation1%175==0)&&(botx[5]!=null)){bot_ai(10,5);}

if(botn6<0){new_bot6()};
if((animation1%175==0)&&(botx[6]!=null)){bot_ai(11,6);}

if(botn7<0){new_bot7()};
if((animation1%175==0)&&(botx[7]!=null)){bot_ai(12,7);}


if(botn8<0){new_bot8()};
if((animation1%200==0)&&(botx[8]!=null)){bot_ai(4,8);}

if(botn9<0){new_bot9()};
if((animation1%200==0)&&(botx[9]!=null)){bot_ai(14,9);}

if(botn10<0){new_bot10()};
if((animation1%200==0)&&(botx[10]!=null)){bot_ai(13,10);}



}

if(player_stop_run>0){player_stop_run--}if(player_stop_atack>0){player_stop_atack--}


save_on(2);
},1);




function timemap(){




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










