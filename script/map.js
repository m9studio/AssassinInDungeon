/*��������� ��������*/
var ground;
var layer1;
var py;
var px;
var botn;

new_map();

function new_map(){
if(maplvl==0){
ground = [
[17,17,17,17,17,17,17,17,17],
[17,6,7,8,17,6,7,8,17],
[17,21,53,23,17,21,52,23,17],
[17,36,37,38,17,36,37,38,17],
[17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17]];

layer1 = [
[49,2,2,2,19,3,50,34,31],
[5,60,40,60,5,59,12,58,5],
[5,1,1,1,5,1,1,1,5],
[5,1,1,1,5,1,1,1,5],
[46,3,1,34,18,3,1,34,20],
[5,1,1,1,48,1,1,1,5],
[5,1,27,1,1,1,27,1,5],
[5,1,1,1,4,1,1,1,5],
[32,2,2,2,47,2,2,2,33],[]];

px=6;py=1;botn=0+2;
}else if(maplvl==1){
ground = [
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,6,7,8,17,6,7,7,7,8,17,6,7,8,17],
[17,21,53,23,17,21,51,22,51,23,17,21,52,23,17],
[17,36,37,38,17,21,22,22,22,23,17,36,37,38,17],
[17,17,17,17,17,21,51,22,51,23,17,17,17,17,17],
[17,17,17,17,17,36,37,37,37,38,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,6,7,8,17],
[17,17,17,17,17,17,17,17,17,17,17,21,53,23,17],
[17,17,17,17,17,17,17,17,17,17,17,36,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]];

layer1 = [
[49,2,2,2,19,2,2,2,2,2,19,3,50,34,31],
[5,1,54,1,5,60,1,1,1,60,5,59,12,58,5],
[5,1,1,1,5,1,27,1,27,1,5,1,1,1,5],
[5,1,27,1,5,1,1,35,1,1,5,1,1,1,5],
[46,3,1,34,20,1,27,1,27,1,46,3,1,34,20],
[5,57,1,57,5,60,1,1,1,60,5,1,1,1,5],
[5,1,27,1,46,2,3,1,34,2,33,1,27,1,5],
[5,57,1,57,5,1,1,1,1,1,1,1,1,1,5],
[46,3,1,34,20,1,1,27,1,1,49,2,2,2,20],
[5,1,1,1,5,1,1,1,1,1,5,1,40,1,5],
[5,1,1,1,46,2,3,1,34,2,20,1,1,1,5],
[5,1,27,1,48,1,1,1,1,1,5,1,27,1,5],
[5,1,1,1,1,1,1,27,1,1,32,3,1,34,20],
[5,1,1,1,4,1,1,1,1,1,1,1,1,1,5],
[32,2,2,2,47,2,2,2,2,2,2,2,2,2,33],[]];

px=12;py=1;botn=0+10;
}else if(maplvl==2){
ground = [
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,6,7,8,17,6,7,7,7,8,17,6,7,8,17],
[17,21,53,23,17,21,52,22,52,23,17,21,53,23,17],
[17,36,37,38,17,21,22,22,22,23,17,36,37,38,17],
[17,17,17,17,17,21,52,22,52,23,17,17,17,17,17],
[17,6,7,8,17,36,37,37,37,38,17,6,7,8,17],
[17,21,22,23,17,17,17,17,17,17,17,21,22,23,17],
[17,36,37,38,17,17,17,17,17,17,17,36,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,6,7,8,17,6,7,8,17],
[17,17,17,17,17,17,17,21,51,23,17,21,53,23,17],
[17,17,17,17,17,17,17,36,37,38,17,36,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]];

layer1 = [
[49,2,2,2,19,2,3,50,34,2,19,2,2,2,31],
[5,1,54,1,5,59,1,1,1,58,5,1,54,1,5],
[5,1,1,1,5,1,1,1,1,1,5,1,1,1,5],
[5,1,27,1,5,1,1,1,1,1,5,1,27,1,5],
[46,3,1,34,20,27,1,27,1,27,46,3,1,34,20],
[5,1,1,1,5,59,27,1,27,58,5,1,1,1,5],
[5,1,27,1,32,2,3,1,34,2,33,1,27,1,5],
[5,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
[46,3,1,49,2,2,19,2,2,2,19,2,2,2,20],
[5,27,1,48,1,27,5,60,35,60,5,1,40,1,5],
[46,3,1,27,1,34,20,1,27,1,5,1,1,1,5],
[5,27,1,4,1,27,5,60,1,60,5,1,27,1,5],
[46,3,1,32,2,2,47,3,1,34,47,3,1,34,20],
[5,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
[32,2,2,2,2,2,2,2,2,2,2,2,2,2,33],[]];

px=7;py=1;botn=0+15;
} else if(maplvl==3){
ground = [
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,6,7,8,17,17,17,17,17,17,17,17,17,6,7,8,17],
[17,21,53,23,17,17,17,17,17,17,17,17,17,21,52,23,17],
[17,36,37,38,17,17,17,17,17,17,17,17,17,36,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]];

layer1 = [
[49,2,2,2,19,2,19,2,2,2,2,2,19,3,50,34,31],
[5,1,40,1,5,27,5,1,1,1,1,27,5,59,1,58,5],
[5,1,1,1,5,1,48,1,49,2,2,2,20,1,1,1,5],
[5,1,27,1,5,1,1,1,48,1,1,1,5,1,1,1,5],
[46,3,1,34,20,1,4,1,1,1,4,1,32,3,1,34,20],
[5,1,1,27,5,1,5,1,4,1,5,1,1,1,1,1,5],
[5,1,34,2,20,1,5,1,5,1,32,2,31,27,4,1,5],
[5,1,1,1,46,2,47,2,20,1,1,1,46,2,33,1,5],
[46,2,31,1,5,1,1,1,46,2,3,1,5,1,1,1,5],
[5,1,5,1,5,1,4,27,5,1,1,1,5,27,4,1,5],
[5,1,48,1,5,1,5,1,5,27,34,2,18,2,20,1,5],
[5,1,1,1,5,1,5,1,5,1,1,1,5,27,5,1,5],
[5,1,4,1,5,1,32,2,47,2,31,1,5,1,48,1,5],
[5,1,5,1,5,1,1,1,1,1,5,1,5,1,1,1,5],
[5,1,32,2,33,1,4,1,34,2,33,1,32,2,3,1,5],
[5,1,1,27,1,1,5,1,1,1,1,1,1,1,1,27,5],
[32,2,2,2,2,2,47,2,2,2,2,2,2,2,2,2,33],[]];

px=14;py=1;botn=0+10;
}
else{
ground = [
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,6,7,7,7,8,17,6,7,7,7,8,17,6,7,7,7,8,17],
[17,21,53,22,53,23,17,21,51,22,51,23,17,21,52,22,52,23,17],
[17,21,22,22,22,23,17,21,22,22,22,23,17,21,22,22,22,23,17],
[17,21,53,22,53,23,17,21,51,22,51,23,17,21,52,22,52,23,17],
[17,36,37,37,37,38,17,36,37,37,37,38,17,36,37,37,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17],
[17,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,17],
[17,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,17],
[17,36,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,38,17],
[17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]];

layer1 = [
[49,2,2,2,2,2,19,2,2,2,2,2,19,2,3,50,34,2,31],
[5,1,1,1,1,1,5,60,1,1,1,60,5,59,1,12,1,58,5],
[5,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,5],
[5,1,1,1,1,1,5,1,1,35,1,1,5,1,1,1,1,1,5],
[5,1,1,1,1,1,5,1,1,1,1,1,5,1,1,1,1,1,5],
[5,1,1,1,1,1,5,60,1,1,1,60,5,59,1,1,1,58,5],
[46,2,3,1,34,2,47,2,3,1,34,2,47,2,3,1,34,2,20],
[5,57,1,1,1,1,57,1,1,1,1,1,57,1,1,1,1,57,5],
[5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
[5,57,1,1,1,1,57,1,1,1,1,1,57,1,1,1,1,57,5],
[32,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,33],[]];

px=15;py=1;botn=0;}

for(i=0;ground.length>i;i++){
for(i1=0;ground[i].length>i1;i1++){
ground[i][i1]--}}
var cc=layer1.length-1;
for(i=0;cc>i;i++){
for(i1=0;layer1[i].length>i1;i1++){
layer1[i][i1]--}}}