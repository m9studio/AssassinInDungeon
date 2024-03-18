function home_on(){
home_menu.style.display='block';
main.style.display='none';
}

function home_off(){
home_menu.style.display='none';
main.style.display='block';
}

function new_skin(a){
if((player_class=='player')&&(a<4)){player_skin=a;home_text.innerHTML='скин №'+a+' установлен!'}else
if((player_class=='beta')&&(a<4)){player_skin=a;home_text.innerHTML='скин №'+a+' установлен!'}else
if((player_class=='admin')&&(a<5)){player_skin=a;home_text.innerHTML='скин №'+a+' установлен!'}else
if((player_class=='creator')&&(a<6)){player_skin=a;home_text.innerHTML='скин №'+a+' установлен!'}else
{new_skin_no(a)}

layer1[py][px]=player_skin*15+200;
drawImage();
}

function new_skin_no(a){
home_text.innerHTML='скин №'+a+' вам не доступен!'

}

