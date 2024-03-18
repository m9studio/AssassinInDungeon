function command(){
var admin_password='AD11mina654';
var msg=prompt('введите запрос');
if(msg=='права администратора'){
var password=prompt('введите пароль');
if(password==admin_password){
var admin_play=true;
while(admin_play==true){
var msg=prompt('введите запрос');var n;
if(msg=='защита'){n=prompt('введите количество');def=+n+def;}
if(msg=='жизни'){n=prompt('введите количество');php=+n+php;}
if(msg=='максимум жизней'){n=prompt('введите количество');pmhp=+n+pmhp;}
if(msg=='опыт'){n=prompt('введите количество');xp=+n+xp;}
if(msg=='уровень'){n=prompt('введите количество');lvl=+n+lvl;}
if(msg=='деньги'){n=prompt('введите количество');gold=+n+gold;}
if(msg=='карта'){n=prompt('введите количество');maplvl=n;}
if(msg=='вещь1'){n=prompt('введите количество');
var for_on=false;
for(i=1;item_slot.length>i;i++){
if(item_slot[i]==0){
for_on=true;item_slot[i]=inventory[n];
i=item_slot.length;newdata();}}
if(for_on==false){alert('нет места в инвентаре')}}

if(msg=='вещь2'){var for_on=false;n=prompt('введите количество');
for(i=1;item_slot.length>i;i++){
if((for_on==false)&&(item_slot[i]!=0)){
if(item_slot[i][0]==n){
item_slot[i][3]++;
for_on=true;
i=item_slot.length;}}
if((for_on==false)&&(item_slot[i]==0)){
item_slot[i]=inventory[n];
for_on=true;
i=item_slot.length;}}
if(for_on==false){alert('нет места в инвентаре')}}


if(msg=='стоп'){admin_play=false;}
}new_map();newdata();
}else{alert('попытка взлома');window.location.reload()}
}


}