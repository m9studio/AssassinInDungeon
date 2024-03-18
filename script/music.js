
function music_valume(a){
if(((music_game.volume==0)&&(a<0))||((music_game.volume==1)&&(a>0))){}else{
music_game.volume=music_game.volume+a;
}
music_style.style='width:50px; height:50px; background:url(img/music.png) -'+music_game.volume*200+'px 0px;';
}

function music_play_on(){
music_game.play()
music_play.style.display='none';
music_stop.style.display='block';
}

function music_stop_on(){
music_game.pause()
music_play.style.display='block';
music_stop.style.display='none';
}
