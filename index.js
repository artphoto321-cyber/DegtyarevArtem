/* цикл if else */
let age =prompt("Введите возраст")
if (age<18) {
    alert("Доступ запрещен");
}
if (age>=18) {
    alert("Доступ разрешен");
}  



/* тернарный оператор */
let userAge =prompt("Введите возраст")
alert(userAge<18?"Доступ запрещен":"Доступ разрешен")



/* цикл switch */
let daysWeek=prompt("Введите день недели")
switch(daysWeek){
    case "1" : alert ("Понедельник")
    break

    case "2" : alert ("Вторник")
    break

    case "3" : alert ("Среда")
    break

    case "4" : alert ("Четверг")
    break

    case "5" : alert ("Пятница")
    break

    case "6" : alert ("Суббота")
    break

    case "7" : alert ("Восресенье")
    break

    default :alert ("Ошибка: такого дня нет!")
}



 /* for, выводим квадраты чисел */
for (let i =1; i<10; i++){
console.log(i*i)
}



/* const isAdmin = true;
const hasToken = false;
Проверяем пользователя на Админ или Токен */



//проверка через форму ввода на сайте
let userStatus= prompt ("Представтесь!")
switch(userStatus) {
    case 'isAdmin':
        alert("Привет, Админ!")
        break
    case "hasToken":
        alert("Привет, токен имеющий!")
        break
    default:
        alert("Я тебя не знаю!")
}



//просто циклом в коде
if (userStatus=isAdmin){
    console.log("Привет, Админ!")
} else if (userStatus=hasToken){
    console.log ("Привет, токен имеющий!")
} else {
    console.log("Я тебя не знаю!")
}



//и, или, не
let x = 15
console.log(x>=10&&x<=20&&x!=15)



//Задание 3 стр.2
let u = 5
while (u >= 0){
    console.log(u--)
}



//Задание 4 стр.2
for(let y=1; y<=10; y ++){
    if (y===7){
        console.log("continue")
    continue
    }
        if(i===9){
        console.log("break")
        break
        }
console.log(y)
}



//задание 5 стр 2
const a=333
const b=5
const c=30

let result = a>b? a:b
let result1= b>c? b:c
let result2=result>result1? result:result1
console.log(result2)



//задание 1 стр. 3
let temperature = 10
if (temperature<=-30) {
    console.log("Оставайтесь дома!")
} else if (temperature>-30, temperature<-10){
    console.log("Сегодня холодно")
} else if (temperature>=-10, temperature<5){
    console.log("Не холодно")
} else if (temperature>=5,temperature<15){
    console.log("Тепло")
} else if (temperature>15,temperature<=25){
    console.log("Очень тепло")
} else if (temperature>25, temperature<35){
    console.log("Жарко")
} else if (temperature>=35){
    console.log("Пекло!")
}



//Задание 2 стр.3
role= "guest"
switch(role){
    case "Admin":
        console.log("Добро пожаловать, Администратор!")
        break
    case "manager":
        console.log("Привет, менеджер!")
        break
    case "user":
        console.log("Рады видеть вас снова!")
        break
    case "guest":
        console.log("Пожалуйста, войдите в систему")
        break
}



//задание 3 стр.3
/* не доделал */
/* let n=100
let m=5
let i=0
while (n>m){
    n/2
    i++
    
}
console.log("На"+ i + "день количество автомобилей станет меньше" + m) */
