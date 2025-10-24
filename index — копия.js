/* 1. сумма чисел от 1 до N */

/* function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){
  sum += i;
}
  return sum;
}
console.log(sumTo(5)) */

/* 2. Степень числа */

/* function pow(base, exponent){
  console.log(base**exponent)
}
pow(3, 3) */

/* 3. Подсчет четных чисел */

/* function counEven(even){
  let e=0
  for(let i = 1; i<=even; i++)
    if (i%2===0){
      e++
    }
    console.log(e)
}
counEven(10) */

/* 4. Факториал числа */

/* function factorial(n){
  let m=1
  for(i =1; i<=n; i++){
  m*=i
}
console.log(m)
}
factorial(5) */

/* 5. Повтор строки */

/* function repeatText(text, count){
  let t= ""
  for (i =0;i<count; i++){
    t+=text
  }
  return t;
}
  console.log(repeatText("WoW-", 5)) */

/* 6. Числа в диапазоне */

/* function printRange(start, end){
  if(start<end){
    let n= start-1
    for(i=start;i<=end;i++){
    n++
    console.log(n)
    }
  } else {console.log("Не правильный ряд!")} 
}
printRange(2, 7) */

/* 7. Подсчет цифр */

/* function countDigits(num){
  num = String(num)
  console.log(num.length)
}
countDigits(1234567) */

/* сумма цифр числа */
/* function sumDigits(num){
		let s = 0
		while (num > 0)
		{
		s += num % 10
		num = Math.floor(num/10)
		}
		console.log("Сумма цифр числа: " + s)
  }
  sumDigits(323) */

/*Таблица умножения */
/* function printTable(n){
  for (i=1;i<=10;i++){
    let m=0
    m=n*i
    console.log(n,"*",i,"=",m)
  }
}
printTable(3) */

/* Обратный отсчет */
