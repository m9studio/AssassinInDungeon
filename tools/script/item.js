var inventory=[];//вещи
//0-100 оружие sword
inventory[1]=[1,'sword','клинок',1,3,2,'s1.png'];
inventory[2]=[2,'sword','легкий меч I',1,7,3,'s2.png'];
inventory[3]=[3,'sword','тяжелый меч I',1,7,3,'s3.png'];


 
//100-200 броня armor
inventory[101]=[101,'armor','кожанный шлем',1,3,2,'a1.png'];
inventory[102]=[102,'armor','кожанный нагрудник',2,7,3,'a2.png'];
inventory[103]=[103,'armor','кожанные перчатки',3,2,1,'a3.png'];
inventory[104]=[104,'armor','кожанные штаны',4,5,3,'a4.png'];
inventory[105]=[105,'armor','кожанные сапоги',5,3,1,'a5.png'];

inventory[106]=[106,'armor','шлем наемника',1,5,2,'a6.png'];
inventory[107]=[107,'armor','нагрудник наемника',2,10,5,'a7.png'];
inventory[108]=[108,'armor','перчатки наемника',3,3,2,'a8.png'];
inventory[109]=[109,'armor','штаны наемника',4,9,4,'a9.png'];
inventory[110]=[110,'armor','сапоги наемника',5,3,2,'a10.png'];

inventory[111]=[111,'armor','шлем рыцаря',1,7,3,'a11.png'];
inventory[112]=[112,'armor','нагрудник рыцаря',2,14,9,'a12.png'];
inventory[113]=[113,'armor','перчатки рыцаря',3,4,2,'a13.png'];
inventory[114]=[114,'armor','штаны рыцаря',4,10,8,'a14.png'];
inventory[115]=[115,'armor','сапоги рыцаря',5,5,3,'a15.png'];


//200-300 кристаллы crystal
inventory[201]=[201,'crystal','кристалл жизни I',1,10,25,'c1.png',1];
inventory[202]=[202,'crystal','кристалл жизни II',1,25,50,'c2.png',1];

inventory[211]=[211,'crystal','кристалл опыта I',1,10,25,'c11.png',2];
inventory[212]=[212,'crystal','кристалл опыта II',1,25,50,'c12.png',2];

//300-400 предметы object
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
