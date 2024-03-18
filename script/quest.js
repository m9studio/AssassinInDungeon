var quest_text=[
['if(quest_player[0]==false){quest_div0.style.display="block";quest_div.innerHTML=quest_text[0][1]}',
'приветствую тебя, ты находишься в игре assassin in dungeon,<br> цель этой игры-выжить любой ценой, так что удачи тебе и приятной игры',
'quest_div0.style.display="none";quest_div.innerHTML="";quest_player[0]=true;',
'quest_div0.style.display="none";quest_div.innerHTML="";quest_player[0]=true;'],

['if(quest_player[1]==false){quest_div0.style.display="block";quest_div.innerHTML=quest_text[1][1]}',
'здравствуй воин, можешь ли ты помочь мне перевезти товар на другой остров',
'quest_div0.style.display="none";map_class="quest_1-2";new_map();',
'quest_div0.style.display="none";quest_div.innerHTML="";'],

['if(quest_player[2]==false){quest_div0.style.display="block";quest_div.innerHTML=quest_text[2][1]}',
'помоги убить темных эльфов',
'quest_div0.style.display="none";if(botn2==0){alert_on("ты прошел квест");gold+=100;newdata();map_class="normal_3";new_map(true, 5, 13);quest_player[2]=true;quest_player[1]=true;}',
'quest_div0.style.display="none";quest_div.innerHTML="";'],

['if(quest_player[3]==false){quest_div0.style.display="block";quest_div.innerHTML=quest_text[3][1]}',
'привет, хочешь я проведу тебя в Атлантиду? <br> стоимость: 150',
'if(gold>=150){quest_div0.style.display="none";map_class="quest_3-4";new_map();gold-=150;newdata()}',
'quest_div0.style.display="none";quest_div.innerHTML="";'],

['if(quest_player[4]==false){quest_div0.style.display="block";quest_div.innerHTML=quest_text[4][1]}',
'хочешь вернуться назад?',
'quest_div0.style.display="none";map_class="normal_3";new_map(true, 12, 2);',
'quest_div0.style.display="none";quest_div.innerHTML="";']



];



function quest_open(a){
questn=a;
eval(quest_text[questn][0])

}

function quest_on(){
eval(quest_text[questn][2])
}
function quest_off(){
eval(quest_text[questn][3])
}



var questn;
var quest_player=[
false,
false,
false,
false,
false
];
















