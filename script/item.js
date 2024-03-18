var inventory=[];//вещи
//1-100 оружие sword
inventory[1]=[1,'sword','клинок',1,3,2,'width:40px; height:40px; background:url(img/items.png) -240px 0px;'];
inventory[2]=[2,'sword','легкий меч I',1,7,3,'width:40px; height:40px; background:url(img/items.png) -280px 0px;'];
inventory[3]=[3,'sword','тяжелый меч I',1,7,3,'width:40px; height:40px; background:url(img/items.png) -320px 0px;'];



//101-200 броня armor
inventory[101]=[101,'armor','кожанный шлем',1,3,2,'width:40px; height:40px; background:url(img/items.png) -40px 0px;'];
inventory[102]=[102,'armor','кожанный нагрудник',2,7,3,'width:40px; height:40px; background:url(img/items.png) -80px 0px;'];
inventory[103]=[103,'armor','кожанные перчатки',3,2,1,'width:40px; height:40px; background:url(img/items.png) -120px 0px;'];
inventory[104]=[104,'armor','кожанные штаны',4,5,3,'width:40px; height:40px; background:url(img/items.png) -160px 0px;'];
inventory[105]=[105,'armor','кожанные сапоги',5,3,1,'width:40px; height:40px; background:url(img/items.png) -200px 0px;'];


//201-300 кристаллы crystal
inventory[201]=[201,'crystal','кристалл жизни I',1,10,25,'width:40px; height:40px; background:url(img/items.png) -360px -40px;'];
inventory[202]=[202,'crystal','кристалл жизни II',1,25,50,'width:40px; height:40px; background:url(img/items.png) -360px -80px;'];

inventory[211]=[211,'crystal','кристалл опыта I',2,10,25,'width:40px; height:40px; background:url(img/items.png) -400px -40px;'];
inventory[212]=[212,'crystal','кристалл опыта II',2,25,50,'width:40px; height:40px; background:url(img/items.png) -400px -80px;'];

//301-400 предметы object
inventory[301]=[301,'object','кристалл I',1,10,25,'o1.png'];
inventory[302]=[302,'object','кристалл II',1,25,50,'o2.png'];

inventory[311]=[311,'object','жизнь',1,10,25,'o11.png'];
inventory[312]=[312,'object','опыт',1,25,50,'o12.png'];














var craft=[];//[0]-ид вещи, что создаем; [1][0...]-вещи для крафта
craft[0]=0;
craft[1]=[201];
craft[2]=[211];
craft[3]=[202];
craft[4]=[212];


craft[5]=[1];
craft[6]=[2];
craft[7]=[3];






