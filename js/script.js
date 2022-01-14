// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let age = prompt("Сколько тебе лет?")
if (age <=11){
    alert("Ты ребенок")
}else if (age <= 17){
    alert("Ты подросток")
}else if (age <= 59){
    alert("Ты взрослый")
}else if (age >= 60 && age <=120){
    alert("Ты пенсионер")
}else {
    alert("Неправильный ввод")
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let numbe = prompt("Напиши цифру от 0 до 9")
if (numbe == 1){
    alert('Это занак - "!"');
}else if (numbe == 2){
    alert('Это занак - "@"');
}else if (numbe == 3){
    alert('Это занак - "#"');
}else if (numbe == 4){
    alert('Это занак - "$"');
}else if (numbe == 5){
    alert('Это занак - "%"');
}else if (numbe == 6){
    alert('Это занак - "^"');
}else if (numbe == 7){
    alert('Это занак - "&"');
}else if (numbe == 8){
    alert('Это занак - "*"');
}else if (numbe == 9){
    alert('Это занак - "("');
}else if (numbe == 0){
    alert('Это занак - ")"');
}

// или
let number = prompt("Напиши цифру от 0 до 9")
const simvol = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
alert("Это символ " + simvol[number])


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let numOne = +prompt("Напиши первое число")
let numTwo = +prompt("Напиши второе число")
let sum = 0
while (numOne <= numTwo) {
    sum+=numOne;
    if (numOne != numTwo) {
        numOne++
        continue;
    }
    else{
        break;
    }
}
alert("Сумма чисел в диапазоне " + sum);

// Запитай у користувача число і виведи всі дільники цього числа
let dilnik = prompt("Напиши число")
let i = 1;
while (i <= dilnik){
    i++
    if (dilnik % i != 0){
        continue;
    }
    console.log("Делится на "+ i);
}


// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let n = prompt("Напиши число")
function IsPalindrome(n) {
    return n + (((n+="").split("").reverse().join("") == n) ?  alert(" Это палиндром") : alert(" Это не палиндром"));
}
IsPalindrome(n)

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//     від 200 до 300 - знижка буде 3%; від 300 до 500 - 5%; від 500 і вище - 7%.
let pokupka = prompt("Напиши cумму покупки")
if (pokupka >=200 && pokupka <=300) {
    alert("Скидка -3% Сумма к оплате " + (pokupka - pokupka * 0.03))
}else if (pokupka >=300 && pokupka <=500){
    alert("Скидка -5% Сумма к оплате " + (pokupka - pokupka * 0.05))
}else if (pokupka >=500){
    alert("Скидка -7% Сумма к оплате " + (pokupka - pokupka * 0.07))
}


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}
