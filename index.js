const result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

const email = "pankovets.artur1@gmail.com";
const emailCheck = email.includes("@");
const emailLength = email.length;
console.log(emailCheck);
console.log(emailLength);

const firstWord = "My";
const secondWord = "name";
const thirdWord = "is";
const fullName = firstWord + " " + secondWord + " " + thirdWord + " " + "Victor";
console.log(fullName);

const userName = "Олена";
const payment = "1200";
const slicedUserName = userName.slice(0, 4);
const preparedUserName = slicedUserName.padEnd(5, "о");
alert(`Дякуємо, ${preparedUserName}! До сплати ${payment} гривень`);