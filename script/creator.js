function command(){
var admin_password='AD11mina654';
var msg=prompt('������� ������');
if(msg=='����� ��������������'){
var password=prompt('������� ������');
if(password==admin_password){
var admin_play=true;
while(admin_play==true){
var msg=prompt('������� ������');var n;
if(msg=='������'){n=prompt('������� ����������');def=+n+def;}
if(msg=='�����'){n=prompt('������� ����������');php=+n+php;}
if(msg=='�������� ������'){n=prompt('������� ����������');pmhp=+n+pmhp;}
if(msg=='����'){n=prompt('������� ����������');xp=+n+xp;}
if(msg=='�������'){n=prompt('������� ����������');lvl=+n+lvl;}
if(msg=='������'){n=prompt('������� ����������');gold=+n+gold;}
if(msg=='�����'){n=prompt('������� ����������');maplvl=n;}
if(msg=='����1'){n=prompt('������� ����������');
var for_on=false;
for(i=1;item_slot.length>i;i++){
if(item_slot[i]==0){
for_on=true;item_slot[i]=inventory[n];
i=item_slot.length;newdata();}}
if(for_on==false){alert('��� ����� � ���������')}}

if(msg=='����2'){var for_on=false;n=prompt('������� ����������');
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
if(for_on==false){alert('��� ����� � ���������')}}


if(msg=='����'){admin_play=false;}
}new_map();newdata();
}else{alert('������� ������');window.location.reload()}
}


}