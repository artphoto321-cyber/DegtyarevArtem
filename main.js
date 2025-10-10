let userName= 'Vasya';
console.log(userName);//string
console.log(typeof(userName));
let age= 33;//number
console.log(age);
console.log(typeof(age));
const Pi= 141592653505820974944594211706798214808651n;//bigint
console.log(Pi);
console.log(typeof(Pi));
let ageUser= age> 30;//boolean
console.log(ageUser);
console.log(typeof(ageUser));
let hair=null;//null
console.log(hair);
console.log(typeof(hair));
let nothing= 123;//undefined
nothing= undefined;
console.log(nothing);
console.log(typeof(nothing));
let wasd = Symbol('wasd');//symbol
console.log(wasd);
console.log(typeof(wasd));
let object={}//object
console.log(typeof {});

console.log(String(age));//преобразование number в string
console.log(+userName);//не явное преобразование в number, string не преобраразовывается в number, т.к. число не считывается
const text= "456";
const textNumber= Number(text);
console.log(textNumber);//преобразование string в number через новую переменную
console.log(Number(true));//JS преобразовывает Number true в 1, false в 0
console.log(Number(false));
console.log(Boolean(''));//строка пуста
console.log(Boolean('1'));//строка не пуста
console.log(5- "4");//String из-за "-" приводится к Number,вычитается и выдает Number
console.log(3+3);//оба значения Number значит арифметическое действие сложения
console.log("not"+ -3);//Number из-за "+" приводится к String и выдает String
console.log(+"Number1");//не число NaN
console.log(typeof(+"Number1"));//тип значения Number
console.log(+"5");// унарный плюс приводит String к Number





